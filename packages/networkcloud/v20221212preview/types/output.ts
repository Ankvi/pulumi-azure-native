import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface AdministrativeCredentialsResponse {
        /**
         * The password of the administrator of the device used during initialization.
         */
        password: string;
        /**
         * The username of the administrator of the device used during initialization.
         */
        username: string;
    }

    export interface BareMetalMachineConfigurationDataResponse {
        /**
         * The connection string for the baseboard management controller including IP address and protocol.
         */
        bmcConnectionString: string;
        /**
         * The credentials of the baseboard management controller on this bare metal machine.
         */
        bmcCredentials: AdministrativeCredentialsResponse;
        /**
         * The MAC address of the BMC for this machine.
         */
        bmcMacAddress: string;
        /**
         * The MAC address associated with the PXE NIC card.
         */
        bootMacAddress: string;
        /**
         * The free-form additional information about the machine, e.g. an asset tag.
         */
        machineDetails?: string;
        /**
         * The user-provided name for the bare metal machine created from this specification.
         * If not provided, the machine name will be generated programmatically.
         */
        machineName?: string;
        /**
         * The slot the physical machine is in the rack based on the BOM configuration.
         */
        rackSlot: number;
        /**
         * The serial number of the machine. Hardware suppliers may use an alternate value. For example, service tag.
         */
        serialNumber: string;
    }

    export interface BgpPeerResponse {
        /**
         * The ASN (Autonomous System Number) of the BGP peer.
         */
        asNumber: number;
        /**
         * The IPv4 or IPv6 address to peer with the associated CNI Network. The IP version type will drive a peering with the same version type from the Default CNI Network. For example, IPv4 to IPv4 or IPv6 to IPv6.
         */
        peerIp: string;
    }

    export interface ClusterAvailableUpgradeVersionResponse {
        /**
         * The indicator of whether the control plane will be impacted during the upgrade.
         */
        controlImpact: string;
        /**
         * The expected duration needed for this upgrade.
         */
        expectedDuration: string;
        /**
         * The impact description including the specific details and release notes.
         */
        impactDescription: string;
        /**
         * The last date the version of the platform is supported.
         */
        supportExpiryDate: string;
        /**
         * The target version this cluster will be upgraded to.
         */
        targetClusterVersion: string;
        /**
         * The indicator of whether the workload will be impacted during the upgrade.
         */
        workloadImpact: string;
    }

    export interface ClusterCapacityResponse {
        /**
         * The remaining appliance-based storage in GB available for workload use.
         */
        availableApplianceStorageGB?: number;
        /**
         * The remaining number of cores that are available in this cluster for workload use.
         */
        availableCoreCount?: number;
        /**
         * The remaining machine or host-based storage in GB available for workload use.
         */
        availableHostStorageGB?: number;
        /**
         * The remaining memory in GB that are available in this cluster for workload use.
         */
        availableMemoryGB?: number;
        /**
         * The total appliance-based storage in GB supported by this cluster for workload use.
         */
        totalApplianceStorageGB?: number;
        /**
         * The total number of cores that are supported by this cluster for workload use.
         */
        totalCoreCount?: number;
        /**
         * The total machine or host-based storage in GB supported by this cluster for workload use.
         */
        totalHostStorageGB?: number;
        /**
         * The total memory supported by this cluster for workload use.
         */
        totalMemoryGB?: number;
    }

    export interface CniBgpConfigurationResponse {
        /**
         * The list of BgpPeer entities that the Hybrid AKS cluster will peer with in addition to peering that occurs automatically with the switch fabric.
         */
        bgpPeers?: BgpPeerResponse[];
        /**
         * The list of prefix community advertisement properties. Each prefix community specifies a prefix, and the
         * communities that should be associated with that prefix when it is announced.
         */
        communityAdvertisements?: CommunityAdvertisementResponse[];
        /**
         * The subnet blocks in CIDR format for Kubernetes service external IPs to be advertised over BGP.
         */
        serviceExternalPrefixes?: string[];
        /**
         * The subnet blocks in CIDR format for Kubernetes load balancers. Load balancer IPs will only be advertised if they
         * are within one of these blocks.
         */
        serviceLoadBalancerPrefixes?: string[];
    }

    export interface CommunityAdvertisementResponse {
        /**
         * The list of community strings to announce with this prefix.
         */
        communities: string[];
        /**
         * The subnet in CIDR format for which properties should be advertised.
         */
        subnetPrefix: string;
    }

    export interface ExtendedLocationResponse {
        /**
         * The resource ID of the extended location on which the resource will be created.
         */
        name: string;
        /**
         * The extended location type, for example, CustomLocation.
         */
        type: string;
    }

    export interface ManagedResourceGroupConfigurationResponse {
        /**
         * The location of the managed resource group. If not specified, the location of the parent resource is chosen.
         */
        location?: string;
        /**
         * The name for the managed resource group. If not specified, the unique name is automatically generated.
         */
        name?: string;
    }

    export interface NetworkAttachmentResponse {
        /**
         * The resource ID of the associated network attached to the virtual machine.
         * It can be one of cloudServicesNetwork, l3Network, l2Network or trunkedNetwork resources.
         */
        attachedNetworkId: string;
        /**
         * The indicator of whether this is the default gateway.
         * Only one of the attached networks (including the CloudServicesNetwork attachment) for a single machine may be specified as True.
         */
        defaultGateway?: string;
        /**
         * The IP allocation mechanism for the virtual machine.
         * Dynamic and Static are only valid for l3Network which may also specify Disabled.
         * Otherwise, Disabled is the only permitted value.
         */
        ipAllocationMethod: string;
        /**
         * The IPv4 address of the virtual machine.
         *
         * This field is used only if the attached network has IPAllocationType of IPV4 or DualStack.
         *
         * If IPAllocationMethod is:
         * Static - this field must contain a user specified IPv4 address from within the subnet specified in the attached network.
         * Dynamic - this field is read-only, but will be populated with an address from within the subnet specified in the attached network.
         * Disabled - this field will be empty.
         */
        ipv4Address?: string;
        /**
         * The IPv6 address of the virtual machine.
         *
         * This field is used only if the attached network has IPAllocationType of IPV6 or DualStack.
         *
         * If IPAllocationMethod is:
         * Static - this field must contain an IPv6 address range from within the range specified in the attached network.
         * Dynamic - this field is read-only, but will be populated with an range from within the subnet specified in the attached network.
         * Disabled - this field will be empty.
         */
        ipv6Address?: string;
        /**
         * The MAC address of the interface for the virtual machine that corresponds to this network attachment.
         */
        macAddress: string;
        /**
         * The associated network's interface name.
         * If specified, the network attachment name has a maximum length of 15 characters and must be unique to this virtual machine.
         * If the user doesn’t specify this value, the default interface name of the network resource will be used.
         * For a CloudServicesNetwork resource, this name will be ignored.
         */
        networkAttachmentName?: string;
    }

    export interface NodeConfigurationResponse {
        /**
         * The resource ID of the agent pool that contains the nodes in this configuration.
         */
        agentPoolId: string;
        /**
         * The name of the agent pool that contains the nodes in this configuration.
         */
        agentPoolName: string;
        /**
         * The number of CPU cores in the virtual machine.
         */
        cpuCores: number;
        /**
         * The root disk size of the virtual machine in GB.
         */
        diskSizeGB: number;
        /**
         * The memory size of the virtual machine in GB.
         */
        memorySizeGB: number;
        /**
         * Field deprecated, use agentPoolName instead. This field will be removed in a future version but will reflect the name of the agent pool that contains the nodes in this configuration.
         */
        nodePoolName: string;
        /**
         * The list of nodes that utilize this configuration.
         */
        nodes: NodeResponse[];
        /**
         * The number of virtual machines that use this configuration.
         */
        vmCount: number;
        /**
         * The name of the VM size supplied during the creation of the cluster.
         */
        vmSize: string;
    }

    export interface NodeResponse {
        /**
         * The resource ID of the bare metal machine that hosts this node.
         */
        bareMetalMachineId: string;
        /**
         * The machine image last used to deploy this node.
         */
        imageId: string;
        /**
         * The list of network attachments to the virtual machine.
         */
        networkAttachments: NetworkAttachmentResponse[];
        /**
         * The name of this node, as realized in the Hybrid AKS cluster.
         */
        nodeName: string;
        /**
         * The power state (On | Off) of the node.
         */
        powerState: string;
    }

    export interface RackDefinitionResponse {
        /**
         * The zone name used for this rack when created.
         */
        availabilityZone?: string;
        /**
         * The unordered list of bare metal machine configuration.
         */
        bareMetalMachineConfigurationData?: BareMetalMachineConfigurationDataResponse[];
        /**
         * The resource ID of the network rack that matches this rack definition.
         */
        networkRackId: string;
        /**
         * The free-form description of the rack's location.
         */
        rackLocation?: string;
        /**
         * The unique identifier for the rack within Network Cloud cluster. An alternate unique alphanumeric value other than a serial number may be provided if desired.
         */
        rackSerialNumber: string;
        /**
         * The resource ID of the sku for the rack being added.
         */
        rackSkuId: string;
        /**
         * The list of storage appliance configuration data for this rack.
         */
        storageApplianceConfigurationData?: StorageApplianceConfigurationDataResponse[];
    }

    export interface ServicePrincipalInformationResponse {
        /**
         * The application ID, also known as client ID, of the service principal.
         */
        applicationId: string;
        /**
         * The password of the service principal.
         */
        password: string;
        /**
         * The principal ID, also known as the object ID, of the service principal.
         */
        principalId: string;
        /**
         * The tenant ID, also known as the directory ID, of the tenant in which the service principal is created.
         */
        tenantId: string;
    }

    export interface StorageApplianceConfigurationDataResponse {
        /**
         * The credentials of the administrative interface on this storage appliance.
         */
        adminCredentials: AdministrativeCredentialsResponse;
        /**
         * The slot that storage appliance is in the rack based on the BOM configuration.
         */
        rackSlot: number;
        /**
         * The serial number of the appliance.
         */
        serialNumber: string;
        /**
         * The user-provided name for the storage appliance that will be created from this specification.
         */
        storageApplianceName?: string;
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

    export interface ValidationThresholdResponse {
        /**
         * Selection of how the type evaluation is applied to the cluster calculation.
         */
        grouping: string;
        /**
         * Selection of how the threshold should be evaluated.
         */
        type: string;
        /**
         * The numeric threshold value.
         */
        value: number;
    }
