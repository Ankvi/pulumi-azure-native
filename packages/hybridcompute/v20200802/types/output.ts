import * as pulumi from "@pulumi/pulumi";
    export interface ErrorDetailResponse {
        /**
         * The error's code.
         */
        code: string;
        /**
         * Additional error details.
         */
        details?: ErrorDetailResponse[];
        /**
         * A human readable error message.
         */
        message: string;
        /**
         * Indicates which property in the request is responsible for the error.
         */
        target?: string;
    }

    /**
     * Metadata pertaining to the geographic location of the resource.
     */
    export interface LocationDataResponse {
        /**
         * The city or locality where the resource is located.
         */
        city?: string;
        /**
         * The country or region where the resource is located
         */
        countryOrRegion?: string;
        /**
         * The district, state, or province where the resource is located.
         */
        district?: string;
        /**
         * A canonical name for the geographic or physical location.
         */
        name: string;
    }

    /**
     * Describes the Machine Extension Instance View.
     */
    export interface MachineExtensionInstanceViewResponse {
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
     * Specifies the operating system settings for the hybrid machine.
     */
    export interface MachinePropertiesResponseOsProfile {
        /**
         * Specifies the host OS name of the hybrid machine.
         */
        computerName: string;
    }

    export interface MachineResponseIdentity {
        /**
         * The identity's principal id.
         */
        principalId: string;
        /**
         * The identity's tenant id.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type?: string;
    }
