<script lang="ts">
import { faEdit, faPlay, faRotateRight, faStop, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Buffer } from 'buffer';
import { router } from 'tinro';

import type { ProviderConnectionInfo, ProviderInfo } from '/@api/provider-info';

import LoadingIconButton from '../ui/LoadingIconButton.svelte';
import {
  type ConnectionCallback,
  eventCollect,
  registerConnectionCallback,
} from './preferences-connection-rendering-task';
import { type IConnectionRestart, type IConnectionStatus } from './Util';

export let connectionStatus: IConnectionStatus | undefined;
export let provider: ProviderInfo;
export let connection: ProviderConnectionInfo;
export let updateConnectionStatus: (
  provider: ProviderInfo,
  providerConnectionInfo: ProviderConnectionInfo,
  action?: string,
  error?: string,
  inProgress?: boolean,
) => void;
export let addConnectionToRestartingQueue: (connection: IConnectionRestart) => void;

async function startConnectionProvider(
  provider: ProviderInfo,
  providerConnectionInfo: ProviderConnectionInfo,
  loggerHandlerKey?: symbol,
): Promise<void> {
  try {
    if (providerConnectionInfo.status === 'stopped') {
      if (!loggerHandlerKey) {
        updateConnectionStatus(provider, providerConnectionInfo, 'start');
        loggerHandlerKey = registerConnectionCallback(getLoggerHandler(provider, providerConnectionInfo));
      }
      await window.startProviderConnectionLifecycle(
        provider.internalId,
        providerConnectionInfo,
        loggerHandlerKey,
        eventCollect,
      );
    }
  } catch (e) {
    console.error(e);
  }
}

async function restartConnectionProvider(
  provider: ProviderInfo,
  providerConnectionInfo: ProviderConnectionInfo,
): Promise<void> {
  if (providerConnectionInfo.status === 'started') {
    updateConnectionStatus(provider, providerConnectionInfo, 'restart');
    const loggerHandlerKey = registerConnectionCallback(getLoggerHandler(provider, providerConnectionInfo));
    await window.stopProviderConnectionLifecycle(
      provider.internalId,
      providerConnectionInfo,
      loggerHandlerKey,
      eventCollect,
    );
    addConnectionToRestartingQueue({
      container: providerConnectionInfo.name,
      provider: provider.internalId,
      loggerHandlerKey,
    });
  }
}

async function stopConnectionProvider(
  provider: ProviderInfo,
  providerConnectionInfo: ProviderConnectionInfo,
): Promise<void> {
  try {
    if (providerConnectionInfo.status === 'started') {
      updateConnectionStatus(provider, providerConnectionInfo, 'stop');
      const loggerHandlerKey = registerConnectionCallback(getLoggerHandler(provider, providerConnectionInfo));
      await window.stopProviderConnectionLifecycle(
        provider.internalId,
        providerConnectionInfo,
        loggerHandlerKey,
        eventCollect,
      );
    }
  } catch (e) {
    console.error(e);
  }
}

async function editConnectionProvider(
  provider: ProviderInfo,
  providerConnectionInfo: ProviderConnectionInfo,
): Promise<void> {
  router.goto(
    `/preferences/container-connection/edit/${provider.internalId}/${Buffer.from(providerConnectionInfo.name).toString(
      'base64',
    )}`,
  );
}

async function deleteConnectionProvider(
  provider: ProviderInfo,
  providerConnectionInfo: ProviderConnectionInfo,
): Promise<void> {
  try {
    if (providerConnectionInfo.status === 'stopped' || providerConnectionInfo.status === 'unknown') {
      updateConnectionStatus(provider, providerConnectionInfo, 'delete');
      const loggerHandlerKey = registerConnectionCallback(getLoggerHandler(provider, providerConnectionInfo));
      await window.deleteProviderConnectionLifecycle(
        provider.internalId,
        providerConnectionInfo,
        loggerHandlerKey,
        eventCollect,
      );
      updateConnectionStatus(provider, providerConnectionInfo, 'delete', undefined, false);
    }
  } catch (e) {
    updateConnectionStatus(provider, providerConnectionInfo, 'delete', String(e));
    console.error(e);
  }
}

function getLoggerHandler(provider: ProviderInfo, containerConnectionInfo: ProviderConnectionInfo): ConnectionCallback {
  return {
    log: (): void => {},
    warn: (): void => {},
    error: (args): void => {
      updateConnectionStatus(provider, containerConnectionInfo, undefined, args);
    },
    onEnd: (): void => {},
  };
}
</script>

{#if connectionStatus}
  {#if connection.lifecycleMethods && connection.lifecycleMethods.length > 0}
    <div class="mt-2 relative">
      <!-- TODO: see action available like machine infos -->
      <div
        class="flex bg-[var(--pd-action-button-details-bg)] w-fit rounded-lg m-auto"
        role="group"
        aria-label="Connection Actions">
        {#if connection.lifecycleMethods.includes('start')}
          <div class="ml-2">
            <LoadingIconButton
              clickAction={(): Promise<void> => startConnectionProvider(provider, connection)}
              action="start"
              icon={faPlay}
              state={connectionStatus}
              leftPosition="left-[0.1rem]" />
          </div>
        {/if}
        {#if connection.lifecycleMethods.includes('start') && connection.lifecycleMethods.includes('stop')}
          <LoadingIconButton
            clickAction={(): Promise<void> => restartConnectionProvider(provider, connection)}
            action="restart"
            icon={faRotateRight}
            state={connectionStatus}
            leftPosition="left-[0.25rem]" />
        {/if}
        {#if connection.lifecycleMethods.includes('stop')}
          <LoadingIconButton
            clickAction={(): Promise<void> => stopConnectionProvider(provider, connection)}
            action="stop"
            icon={faStop}
            state={connectionStatus}
            leftPosition="left-[0.12rem]" />
        {/if}
        {#if connection.lifecycleMethods.includes('edit')}
          <LoadingIconButton
            clickAction={(): Promise<void> => editConnectionProvider(provider, connection)}
            action="edit"
            icon={faEdit}
            state={connectionStatus}
            leftPosition="left-[0.12rem]" />
        {/if}
        {#if connection.lifecycleMethods.includes('delete')}
          <LoadingIconButton
            clickAction={(): Promise<void> => deleteConnectionProvider(provider, connection)}
            action="delete"
            icon={faTrash}
            state={connectionStatus}
            leftPosition="left-[0.15rem]" />
        {/if}
        <div class="mr-2 text-sm">
          <slot name="advanced-actions" />
        </div>
      </div>
    </div>
  {/if}
{/if}
