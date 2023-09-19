import * as pulumi from "@pulumi/pulumi";
    export interface AADProperties {
        audience?: string;
        authority?: string;
        servicePrincipalClientId?: string;
        servicePrincipalObjectId?: string;
        tenantId?: string;
    }

    export interface AADPropertiesArgs {
        audience?: pulumi.Input<string>;
        authority?: pulumi.Input<string>;
        servicePrincipalClientId?: pulumi.Input<string>;
        servicePrincipalObjectId?: pulumi.Input<string>;
        tenantId?: pulumi.Input<string>;
    }
