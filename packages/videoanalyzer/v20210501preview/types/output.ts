import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines how the Video Analyzer account is (optionally) encrypted.
     */
    export interface AccountEncryptionResponse {
        /**
         * The Key Vault identity.
         */
        identity?: ResourceIdentityResponse;
        /**
         * The properties of the key used to encrypt the account.
         */
        keyVaultProperties?: KeyVaultPropertiesResponse;
        /**
         * The current status of the Key Vault mapping.
         */
        status: string;
        /**
         * The type of key used to encrypt the Account Key.
         */
        type: string;
    }

    /**
     * The endpoint details.
     */
    export interface EndpointResponse {
        /**
         * The URL of the endpoint.
         */
        endpointUrl?: string;
        /**
         * The type of the endpoint.
         */
        type: string;
    }

    /**
     * The details for accessing the encryption keys in Key Vault.
     */
    export interface KeyVaultPropertiesResponse {
        /**
         * The current key used to encrypt Video Analyzer account, including the key version.
         */
        currentKeyIdentifier: string;
        /**
         * The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey).
         */
        keyIdentifier: string;
    }

    /**
     * The user assigned managed identity to use when accessing a resource.
     */
    export interface ResourceIdentityResponse {
        /**
         * The user assigned managed identity's resource identifier to use when accessing a resource.
         */
        userAssignedIdentity: string;
    }

    /**
     * The details about the associated storage account.
     */
    export interface StorageAccountResponse {
        /**
         * The ID of the storage account resource. Video Analyzer relies on tables, queues, and blobs. The primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage).
         */
        id?: string;
        /**
         * A managed identity that Video Analyzer will use to access the storage account.
         */
        identity?: ResourceIdentityResponse;
        /**
         * The current status of the storage account mapping.
         */
        status: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }

    /**
     * The details of the user assigned managed identity used by the Video Analyzer resource.
     */
    export interface UserAssignedManagedIdentityResponse {
        /**
         * The client ID.
         */
        clientId: string;
        /**
         * The principal ID.
         */
        principalId: string;
    }

    /**
     * The managed identity for the Video Analyzer resource.
     */
    export interface VideoAnalyzerIdentityResponse {
        /**
         * The identity type.
         */
        type: string;
        /**
         * The User Assigned Managed Identities.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedManagedIdentityResponse};
    }

    /**
     * Video flags contain information about the available video actions and its dynamic properties based on the current video state.
     */
    export interface VideoFlagsResponse {
        /**
         * Value indicating whether or not the video can be streamed. Only "archive" type videos can be streamed.
         */
        canStream: boolean;
        /**
         * Value indicating whether or not there has ever been data recorded or uploaded into the video. Newly created videos have this value set to false.
         */
        hasData: boolean;
        /**
         * Value indicating whether or not the video is currently being referenced be an active live pipeline. The fact that is being referenced, doesn't necessarily indicate that data is being received. For example, video recording may be gated on events or camera may not be accessible at the time.
         */
        isRecording: boolean;
    }

    /**
     * Contains information about the video and audio content.
     */
    export interface VideoMediaInfoResponse {
        /**
         * Video segment length indicates the length of individual video files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments.
         */
        segmentLength: string;
    }

    /**
     * Video streaming holds information about video streaming URLs.
     */
    export interface VideoStreamingResponse {
        /**
         * Video streaming base URL for the video archive. When present, archived video can be played through the Azure Video Analyzer player. Alternatively, this URL can be used with compatible DASH or HLS players by appending the following to the base URL:
         * 
         *   - HLSv4:     /manifest(format=m3u8-aapl).m3u8
         *   - HLS CMAF:  /manifest(format=m3u8-cmaf)
         *   - DASH CMAF: /manifest(format=mpd-time-cmaf)
         * 
         * Moreover, an ongoing video recording can be played in "live mode" with latencies which are approximately double of the chosen video segment length.
         */
        archiveBaseUrl?: string;
    }
