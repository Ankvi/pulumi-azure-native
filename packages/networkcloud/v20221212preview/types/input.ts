import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface AdministrativeCredentialsArgs {
        /**
         * The password of the administrator of the device used during initialization.
         */
        password: pulumi.Input<string>;
        /**
         * The username of the administrator of the device used during initialization.
         */
        username: pulumi.Input<string>;
    }

    export interface BareMetalMachineConfigurationDataArgs {
        /**
         * The credentials of the baseboard management controller on this bare metal machine.
         */
        bmcCredentials: pulumi.Input<AdministrativeCredentialsArgs>;
        /**
         * The MAC address of the BMC for this machine.
         */
        bmcMacAddress: pulumi.Input<string>;
        /**
         * The MAC address associated with the PXE NIC card.
         */
        bootMacAddress: pulumi.Input<string>;
        /**
         * The free-form additional information about the machine, e.g. an asset tag.
         */
        machineDetails?: pulumi.Input<string>;
        /**
         * The user-provided name for the bare metal machine created from this specification.
         * If not provided, the machine name will be generated programmatically.
         */
        machineName?: pulumi.Input<string>;
        /**
         * The slot the physical machine is in the rack based on the BOM configuration.
         */
        rackSlot: pulumi.Input<number>;
        /**
         * The serial number of the machine. Hardware suppliers may use an alternate value. For example, service tag.
         */
        serialNumber: pulumi.Input<string>;
    }

    export interface BgpPeerArgs {
        /**
         * The ASN (Autonomous System Number) of the BGP peer.
         */
        asNumber: pulumi.Input<number>;
        /**
         * The password for this peering neighbor. It defaults to no password if not specified.
         */
        password?: pulumi.Input<string>;
        /**
         * The IPv4 or IPv6 address to peer with the associated CNI Network. The IP version type will drive a peering with the same version type from the Default CNI Network. For example, IPv4 to IPv4 or IPv6 to IPv6.
         */
        peerIp: pulumi.Input<string>;
    }

    export interface CniBgpConfigurationArgs {
        /**
         * The list of BgpPeer entities that the Hybrid AKS cluster will peer with in addition to peering that occurs automatically with the switch fabric.
         */
        bgpPeers?: pulumi.Input<pulumi.Input<BgpPeerArgs>[]>;
        /**
         * The list of prefix community advertisement properties. Each prefix community specifies a prefix, and the
         * communities that should be associated with that prefix when it is announced.
         */
        communityAdvertisements?: pulumi.Input<pulumi.Input<CommunityAdvertisementArgs>[]>;
        /**
         * The password of the Calico node mesh. It defaults to a randomly-generated string when not provided.
         */
        nodeMeshPassword?: pulumi.Input<string>;
        /**
         * The subnet blocks in CIDR format for Kubernetes service external IPs to be advertised over BGP.
         */
        serviceExternalPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The subnet blocks in CIDR format for Kubernetes load balancers. Load balancer IPs will only be advertised if they
         * are within one of these blocks.
         */
        serviceLoadBalancerPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface CommunityAdvertisementArgs {
        /**
         * The list of community strings to announce with this prefix.
         */
        communities: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The subnet in CIDR format for which properties should be advertised.
         */
        subnetPrefix: pulumi.Input<string>;
    }

    export interface ExtendedLocationArgs {
        /**
         * The resource ID of the extended location on which the resource will be created.
         */
        name: pulumi.Input<string>;
        /**
         * The extended location type, for example, CustomLocation.
         */
        type: pulumi.Input<string>;
    }

    export interface ManagedResourceGroupConfigurationArgs {
        /**
         * The location of the managed resource group. If not specified, the location of the parent resource is chosen.
         */
        location?: pulumi.Input<string>;
        /**
         * The name for the managed resource group. If not specified, the unique name is automatically generated.
         */
        name?: pulumi.Input<string>;
    }

    export interface RackDefinitionArgs {
        /**
         * The zone name used for this rack when created.
         */
        availabilityZone?: pulumi.Input<string>;
        /**
         * The unordered list of bare metal machine configuration.
         */
        bareMetalMachineConfigurationData?: pulumi.Input<pulumi.Input<BareMetalMachineConfigurationDataArgs>[]>;
        /**
         * The resource ID of the network rack that matches this rack definition.
         */
        networkRackId: pulumi.Input<string>;
        /**
         * The free-form description of the rack's location.
         */
        rackLocation?: pulumi.Input<string>;
        /**
         * The unique identifier for the rack within Network Cloud cluster. An alternate unique alphanumeric value other than a serial number may be provided if desired.
         */
        rackSerialNumber: pulumi.Input<string>;
        /**
         * The resource ID of the sku for the rack being added.
         */
        rackSkuId: pulumi.Input<string>;
        /**
         * The list of storage appliance configuration data for this rack.
         */
        storageApplianceConfigurationData?: pulumi.Input<pulumi.Input<StorageApplianceConfigurationDataArgs>[]>;
    }

    export interface ServicePrincipalInformationArgs {
        /**
         * The application ID, also known as client ID, of the service principal.
         */
        applicationId: pulumi.Input<string>;
        /**
         * The password of the service principal.
         */
        password: pulumi.Input<string>;
        /**
         * The principal ID, also known as the object ID, of the service principal.
         */
        principalId: pulumi.Input<string>;
        /**
         * The tenant ID, also known as the directory ID, of the tenant in which the service principal is created.
         */
        tenantId: pulumi.Input<string>;
    }

    export interface StorageApplianceConfigurationDataArgs {
        /**
         * The credentials of the administrative interface on this storage appliance.
         */
        adminCredentials: pulumi.Input<AdministrativeCredentialsArgs>;
        /**
         * The slot that storage appliance is in the rack based on the BOM configuration.
         */
        rackSlot: pulumi.Input<number>;
        /**
         * The serial number of the appliance.
         */
        serialNumber: pulumi.Input<string>;
        /**
         * The user-provided name for the storage appliance that will be created from this specification.
         */
        storageApplianceName?: pulumi.Input<string>;
    }

    export interface ValidationThresholdArgs {
        /**
         * Selection of how the type evaluation is applied to the cluster calculation.
         */
        grouping: pulumi.Input<string | enums.ValidationThresholdGrouping>;
        /**
         * Selection of how the threshold should be evaluated.
         */
        type: pulumi.Input<string | enums.ValidationThresholdType>;
        /**
         * The numeric threshold value.
         */
        value: pulumi.Input<number>;
    }
