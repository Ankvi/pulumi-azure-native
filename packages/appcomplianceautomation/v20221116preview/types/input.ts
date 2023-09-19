import * as pulumi from "@pulumi/pulumi";
    /**
     * Report's properties.
     */
    export interface ReportPropertiesArgs {
        /**
         * Report offer Guid.
         */
        offerGuid?: pulumi.Input<string>;
        /**
         * List of resource data.
         */
        resources: pulumi.Input<pulumi.Input<ResourceMetadataArgs>[]>;
        /**
         * Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
         * An example of valid timezone id is "Pacific Standard Time".
         */
        timeZone: pulumi.Input<string>;
        /**
         * Report collection trigger time.
         */
        triggerTime: pulumi.Input<string>;
    }

    /**
     * Single resource Id's metadata.
     */
    export interface ResourceMetadataArgs {
        /**
         * Resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1".
         */
        resourceId: pulumi.Input<string>;
        /**
         * Resource kind.
         */
        resourceKind?: pulumi.Input<string>;
        /**
         * Resource name.
         */
        resourceName?: pulumi.Input<string>;
        /**
         * Resource type.
         */
        resourceType?: pulumi.Input<string>;
        /**
         * Resource's tag type.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
