import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Diagnostic details.
 */
export class ApiDiagnostic extends pulumi.CustomResource {
    /**
     * Get an existing ApiDiagnostic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiDiagnostic {
        return new ApiDiagnostic(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20180101:ApiDiagnostic';

    /**
     * Returns true if the given object is an instance of ApiDiagnostic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiDiagnostic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiDiagnostic.__pulumiType;
    }

    /**
     * Indicates whether a diagnostic should receive data or not.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type for API Management resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ApiDiagnostic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiDiagnosticArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["diagnosticId"] = args ? args.diagnosticId : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20170301:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20180601preview:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20190101:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20191201:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20191201preview:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20200601preview:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20201201:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20210101preview:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20210401preview:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20210801:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20211201preview:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20220401preview:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20220801:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20220901preview:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20230301preview:ApiDiagnostic" }, { type: "azure-native:apimanagement/v20230501preview:ApiDiagnostic" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApiDiagnostic.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiDiagnostic resource.
 */
export interface ApiDiagnosticArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: pulumi.Input<string>;
    /**
     * Diagnostic identifier. Must be unique in the current API Management service instance.
     */
    diagnosticId?: pulumi.Input<string>;
    /**
     * Indicates whether a diagnostic should receive data or not.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}