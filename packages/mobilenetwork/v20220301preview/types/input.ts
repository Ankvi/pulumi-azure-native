import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Reference to an Attached Data Network resource.
     */
    export interface AttachedDataNetworkResourceIdArgs {
        /**
         * Attached Data Network resource ID.
         */
        id: pulumi.Input<string>;
    }

    /**
     * Reference to an Azure ARC custom location resource.
     */
    export interface CustomLocationResourceIdArgs {
        /**
         * Azure ARC custom location resource ID.
         */
        id: pulumi.Input<string>;
    }

    /**
     * Interface properties
     */
    export interface InterfacePropertiesArgs {
        /**
         * The IPv4 address.
         */
        ipv4Address?: pulumi.Input<string>;
        /**
         * The default IPv4 gateway (router).
         */
        ipv4Gateway?: pulumi.Input<string>;
        /**
         * The IPv4 subnet.
         */
        ipv4Subnet?: pulumi.Input<string>;
        /**
         * The logical name for this interface. This should match one of the interfaces configured on your Azure Stack Edge machine.
         */
        name: pulumi.Input<string>;
    }

    /**
     * Reference to a Mobile Network resource.
     */
    export interface MobileNetworkResourceIdArgs {
        /**
         * Mobile Network resource ID.
         */
        id: pulumi.Input<string>;
    }

    /**
     * Reference to a SIM Policy resource.
     */
    export interface SimPolicyResourceIdArgs {
        /**
         * SIM Policy resource ID.
         */
        id: pulumi.Input<string>;
    }

    /**
     * Static IP configuration for a sim, scoped to a particular attached data network and slice.
     */
    export interface SimStaticIpPropertiesArgs {
        /**
         * The attached data network on which the static IP address will be used. The combination of attachedDataNetwork and slice defines the network scope of the IP address.
         */
        attachedDataNetwork?: pulumi.Input<AttachedDataNetworkResourceIdArgs>;
        /**
         * The network slice on which the static IP address will be used. The combination of attachedDataNetwork and slice defines the network scope of the IP address.
         */
        slice?: pulumi.Input<SliceResourceIdArgs>;
        /**
         * The static IP configuration for the sim to use at the defined network scope.
         */
        staticIp?: pulumi.Input<SimStaticIpPropertiesStaticIpArgs>;
    }

    /**
     * The static IP configuration for the sim to use at the defined network scope.
     */
    export interface SimStaticIpPropertiesStaticIpArgs {
        /**
         * The IPv4 address assigned to the sim at this network scope. This address must be in the userEquipmentStaticAddressPoolPrefix defined in the attachedDataNetwork.
         */
        ipv4Address?: pulumi.Input<string>;
    }

    /**
     * Reference to a Slice resource.
     */
    export interface SliceResourceIdArgs {
        /**
         * Slice resource ID.
         */
        id: pulumi.Input<string>;
    }
