import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Reference to an Attached Data Network resource.
     */
    export interface AttachedDataNetworkResourceIdResponse {
        /**
         * Attached Data Network resource ID.
         */
        id: string;
    }

    /**
     * Reference to an Azure ARC custom location resource.
     */
    export interface CustomLocationResourceIdResponse {
        /**
         * Azure ARC custom location resource ID.
         */
        id: string;
    }

    /**
     * Interface properties
     */
    export interface InterfacePropertiesResponse {
        /**
         * The IPv4 address.
         */
        ipv4Address?: string;
        /**
         * The default IPv4 gateway (router).
         */
        ipv4Gateway?: string;
        /**
         * The IPv4 subnet.
         */
        ipv4Subnet?: string;
        /**
         * The logical name for this interface. This should match one of the interfaces configured on your Azure Stack Edge machine.
         */
        name: string;
    }

    /**
     * Reference to a Mobile Network resource.
     */
    export interface MobileNetworkResourceIdResponse {
        /**
         * Mobile Network resource ID.
         */
        id: string;
    }

    /**
     * Reference to a SIM Policy resource.
     */
    export interface SimPolicyResourceIdResponse {
        /**
         * SIM Policy resource ID.
         */
        id: string;
    }

    /**
     * Static IP configuration for a sim, scoped to a particular attached data network and slice.
     */
    export interface SimStaticIpPropertiesResponse {
        /**
         * The attached data network on which the static IP address will be used. The combination of attachedDataNetwork and slice defines the network scope of the IP address.
         */
        attachedDataNetwork?: AttachedDataNetworkResourceIdResponse;
        /**
         * The network slice on which the static IP address will be used. The combination of attachedDataNetwork and slice defines the network scope of the IP address.
         */
        slice?: SliceResourceIdResponse;
        /**
         * The static IP configuration for the sim to use at the defined network scope.
         */
        staticIp?: SimStaticIpPropertiesResponseStaticIp;
    }

    /**
     * The static IP configuration for the sim to use at the defined network scope.
     */
    export interface SimStaticIpPropertiesResponseStaticIp {
        /**
         * The IPv4 address assigned to the sim at this network scope. This address must be in the userEquipmentStaticAddressPoolPrefix defined in the attachedDataNetwork.
         */
        ipv4Address?: string;
    }

    /**
     * Reference to a Slice resource.
     */
    export interface SliceResourceIdResponse {
        /**
         * Slice resource ID.
         */
        id: string;
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
