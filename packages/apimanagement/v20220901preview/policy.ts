import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Policy Contract details.
 */
export class Policy extends pulumi.CustomResource {
    /**
     * Get an existing Policy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Policy {
        return new Policy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20220901preview:Policy';

    /**
     * Returns true if the given object is an instance of Policy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Policy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Policy.__pulumiType;
    }

    /**
     * Format of the policyContent.
     */
    public readonly format!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Contents of the Policy as defined by the format.
     */
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.value === undefined) && !opts.urn) {
                throw new Error("Missing required property 'value'");
            }
            resourceInputs["format"] = (args ? args.format : undefined) ?? "xml";
            resourceInputs["policyId"] = args ? args.policyId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["format"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["value"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:Policy" }, { type: "azure-native:apimanagement/v20170301:Policy" }, { type: "azure-native:apimanagement/v20180101:Policy" }, { type: "azure-native:apimanagement/v20180601preview:Policy" }, { type: "azure-native:apimanagement/v20190101:Policy" }, { type: "azure-native:apimanagement/v20191201:Policy" }, { type: "azure-native:apimanagement/v20191201preview:Policy" }, { type: "azure-native:apimanagement/v20200601preview:Policy" }, { type: "azure-native:apimanagement/v20201201:Policy" }, { type: "azure-native:apimanagement/v20210101preview:Policy" }, { type: "azure-native:apimanagement/v20210401preview:Policy" }, { type: "azure-native:apimanagement/v20210801:Policy" }, { type: "azure-native:apimanagement/v20211201preview:Policy" }, { type: "azure-native:apimanagement/v20220401preview:Policy" }, { type: "azure-native:apimanagement/v20220801:Policy" }, { type: "azure-native:apimanagement/v20230301preview:Policy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Policy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * Format of the policyContent.
     */
    format?: pulumi.Input<string | types.enums.v20220901preview.PolicyContentFormat>;
    /**
     * The identifier of the Policy.
     */
    policyId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Contents of the Policy as defined by the format.
     */
    value: pulumi.Input<string>;
}
