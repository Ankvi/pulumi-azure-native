import * as pulumi from "@pulumi/pulumi";
    /**
     * Document processor properties
     */
    export interface DocumentProcessorPropertiesArgs {
        /**
         * The ID (GUID) of an SharePoint Online (SPO) tenant associated with this document processor resource
         */
        spoTenantId: pulumi.Input<string>;
        /**
         * The URL of an SharePoint Online (SPO) tenant associated with this document processor resource
         */
        spoTenantUrl: pulumi.Input<string>;
    }
