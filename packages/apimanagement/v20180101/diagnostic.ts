import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Diagnostic details.
 */
export class Diagnostic extends pulumi.CustomResource {
    /**
     * Get an existing Diagnostic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Diagnostic {
        return new Diagnostic(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20180101:Diagnostic';

    /**
     * Returns true if the given object is an instance of Diagnostic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Diagnostic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Diagnostic.__pulumiType;
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
     * Create a Diagnostic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiagnosticArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
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
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:Diagnostic" }, { type: "azure-native:apimanagement/v20170301:Diagnostic" }, { type: "azure-native:apimanagement/v20180601preview:Diagnostic" }, { type: "azure-native:apimanagement/v20190101:Diagnostic" }, { type: "azure-native:apimanagement/v20191201:Diagnostic" }, { type: "azure-native:apimanagement/v20191201preview:Diagnostic" }, { type: "azure-native:apimanagement/v20200601preview:Diagnostic" }, { type: "azure-native:apimanagement/v20201201:Diagnostic" }, { type: "azure-native:apimanagement/v20210101preview:Diagnostic" }, { type: "azure-native:apimanagement/v20210401preview:Diagnostic" }, { type: "azure-native:apimanagement/v20210801:Diagnostic" }, { type: "azure-native:apimanagement/v20211201preview:Diagnostic" }, { type: "azure-native:apimanagement/v20220401preview:Diagnostic" }, { type: "azure-native:apimanagement/v20220801:Diagnostic" }, { type: "azure-native:apimanagement/v20220901preview:Diagnostic" }, { type: "azure-native:apimanagement/v20230301preview:Diagnostic" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Diagnostic.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Diagnostic resource.
 */
export interface DiagnosticArgs {
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
