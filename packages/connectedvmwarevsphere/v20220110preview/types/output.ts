import * as pulumi from "@pulumi/pulumi";
    /**
     * Instance view status.
     */
    export interface MachineExtensionInstanceViewResponseStatus {
        /**
         * The status code.
         */
        code: string;
        /**
         * The short localizable label for the status.
         */
        displayStatus: string;
        /**
         * The level code.
         */
        level: string;
        /**
         * The detailed status message, including for alerts and error messages.
         */
        message: string;
        /**
         * The time of the status.
         */
        time: string;
    }

    /**
     * The machine extension instance view.
     */
    export interface MachineExtensionPropertiesResponseInstanceView {
        /**
         * The machine extension name.
         */
        name: string;
        /**
         * Instance view status.
         */
        status?: MachineExtensionInstanceViewResponseStatus;
        /**
         * Specifies the type of the extension; an example is "CustomScriptExtension".
         */
        type: string;
        /**
         * Specifies the version of the script handler.
         */
        typeHandlerVersion: string;
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
