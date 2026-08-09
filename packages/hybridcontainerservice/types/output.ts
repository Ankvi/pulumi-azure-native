import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The credential result response.
 */
export interface CredentialResultResponse {
    /**
     * The name of the credential.
     */
    name: string;
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    value: string;
}

export interface ListCredentialResponseResponseError {
    code?: string;
    message?: string;
}

export interface ListCredentialResponseResponseProperties {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    kubeconfigs: CredentialResultResponse[];
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
 * Properties of the virtual network resource
 */
export interface VirtualNetworkPropertiesResponse {
    /**
     * List of DNS server IP Addresses associated with the network
     */
    dnsServers?: string[];
    /**
     * IP Address of the Gateway associated with the network
     */
    gateway?: string;
    infraVnetProfile?: VirtualNetworkPropertiesResponseInfraVnetProfile;
    /**
     * IP Address Prefix of the network
     */
    ipAddressPrefix?: string;
    provisioningState: string;
    /**
     * Status of the virtual network resource
     */
    status: VirtualNetworkPropertiesResponseStatus;
    /**
     * Range of IP Addresses for Kubernetes API Server and services if using HA Proxy load balancer
     */
    vipPool?: VirtualNetworkPropertiesResponseVipPool[];
    /**
     * VLAN Id used by the network
     */
    vlanID?: number;
    /**
     * Range of IP Addresses for Kubernetes node VMs
     */
    vmipPool?: VirtualNetworkPropertiesResponseVmipPool[];
}

/**
 * The error if any from the operation.
 */
export interface VirtualNetworkPropertiesResponseError {
    /**
     * The error code from the operation.
     */
    code?: string;
    /**
     * The error message from the operation.
     */
    message?: string;
}

/**
 * Infrastructure network profile for HCI platform
 */
export interface VirtualNetworkPropertiesResponseHci {
    /**
     * Group in MOC(Microsoft On-premises Cloud)
     */
    mocGroup?: string;
    /**
     * Location in MOC(Microsoft On-premises Cloud)
     */
    mocLocation?: string;
    /**
     * Virtual Network name in MOC(Microsoft On-premises Cloud)
     */
    mocVnetName?: string;
}

export interface VirtualNetworkPropertiesResponseInfraVnetProfile {
    /**
     * Infrastructure network profile for HCI platform
     */
    hci?: VirtualNetworkPropertiesResponseHci;
}

/**
 * The detailed status of the long running operation.
 */
export interface VirtualNetworkPropertiesResponseOperationStatus {
    /**
     * The error if any from the operation.
     */
    error?: VirtualNetworkPropertiesResponseError;
    /**
     * The identifier of the operation.
     */
    operationId?: string;
    /**
     * The status of the operation.
     */
    status?: string;
}

/**
 * Status of the virtual network resource
 */
export interface VirtualNetworkPropertiesResponseStatus {
    /**
     * The detailed status of the long running operation.
     */
    operationStatus?: VirtualNetworkPropertiesResponseOperationStatus;
}

export interface VirtualNetworkPropertiesResponseVipPool {
    /**
     * Ending IP address for the IP Pool
     */
    endIP?: string;
    /**
     * Starting IP address for the IP Pool
     */
    startIP?: string;
}

export interface VirtualNetworkPropertiesResponseVmipPool {
    /**
     * Ending IP address for the IP Pool
     */
    endIP?: string;
    /**
     * Starting IP address for the IP Pool
     */
    startIP?: string;
}

/**
 * Extended location pointing to the underlying infrastructure
 */
export interface VirtualNetworkResponseExtendedLocation {
    /**
     * ARM Id of the extended location.
     */
    name?: string;
    /**
     * The extended location type. Allowed value: 'CustomLocation'
     */
    type?: string;
}
