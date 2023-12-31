import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Metadata pertaining to the geographic location of the resource.
     */
    export interface LocationDataArgs {
        /**
         * The city or locality where the resource is located.
         */
        city?: pulumi.Input<string>;
        /**
         * The country or region where the resource is located
         */
        countryOrRegion?: pulumi.Input<string>;
        /**
         * The district, state, or province where the resource is located.
         */
        district?: pulumi.Input<string>;
        /**
         * A canonical name for the geographic or physical location.
         */
        name: pulumi.Input<string>;
    }

    /**
     * Describes the Machine Extension Instance View.
     */
    export interface MachineExtensionInstanceViewArgs {
        /**
         * The machine extension name.
         */
        name?: pulumi.Input<string>;
        /**
         * Instance view status.
         */
        status?: pulumi.Input<MachineExtensionInstanceViewStatusArgs>;
        /**
         * Specifies the type of the extension; an example is "CustomScriptExtension".
         */
        type?: pulumi.Input<string>;
        /**
         * Specifies the version of the script handler.
         */
        typeHandlerVersion?: pulumi.Input<string>;
    }

    /**
     * Instance view status.
     */
    export interface MachineExtensionInstanceViewStatusArgs {
        /**
         * The status code.
         */
        code?: pulumi.Input<string>;
        /**
         * The short localizable label for the status.
         */
        displayStatus?: pulumi.Input<string>;
        /**
         * The level code.
         */
        level?: pulumi.Input<string | enums.StatusLevelTypes>;
        /**
         * The detailed status message, including for alerts and error messages.
         */
        message?: pulumi.Input<string>;
        /**
         * The time of the status.
         */
        time?: pulumi.Input<string>;
    }

    /**
     * The machine extension instance view.
     */
    export interface MachineExtensionPropertiesInstanceViewArgs {
        /**
         * The machine extension name.
         */
        name?: pulumi.Input<string>;
        /**
         * Instance view status.
         */
        status?: pulumi.Input<MachineExtensionInstanceViewStatusArgs>;
        /**
         * Specifies the type of the extension; an example is "CustomScriptExtension".
         */
        type?: pulumi.Input<string>;
        /**
         * Specifies the version of the script handler.
         */
        typeHandlerVersion?: pulumi.Input<string>;
    }

    export interface MachineIdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Private endpoint which the connection belongs to.
     */
    export interface PrivateEndpointPropertyArgs {
        /**
         * Resource id of the private endpoint.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * State of the private endpoint connection.
     */
    export interface PrivateLinkServiceConnectionStatePropertyArgs {
        /**
         * The private link service connection description.
         */
        description: pulumi.Input<string>;
        /**
         * The private link service connection status.
         */
        status: pulumi.Input<string>;
    }
