import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Details of a Reference Vm
     */
    export interface ReferenceVmArgs {
        /**
         * The password of the virtual machine. This will be set to null in GET resource API
         */
        password?: pulumi.Input<string>;
        /**
         * The username of the virtual machine
         */
        userName: pulumi.Input<string>;
    }

    /**
     * Represents a VM and the setting Id it was created for.
     */
    export interface ResourceSetArgs {
        /**
         * resourceSettingId for the environment
         */
        resourceSettingId?: pulumi.Input<string>;
        /**
         * VM resource Id for the environment
         */
        vmResourceId?: pulumi.Input<string>;
    }

    /**
     * Represents resource specific settings
     */
    export interface ResourceSettingsArgs {
        /**
         * The resource id of the gallery image used for creating the virtual machine
         */
        galleryImageResourceId?: pulumi.Input<string>;
        /**
         * Details specific to Reference Vm
         */
        referenceVm: pulumi.Input<ReferenceVmArgs>;
        /**
         * The size of the virtual machine
         */
        size?: pulumi.Input<string | enums.ManagedLabVmSize>;
    }
