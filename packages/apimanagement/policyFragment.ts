import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Policy fragment contract details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PolicyFragment extends pulumi.CustomResource {
    /**
     * Get an existing PolicyFragment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicyFragment {
        return new PolicyFragment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:PolicyFragment';

    /**
     * Returns true if the given object is an instance of PolicyFragment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyFragment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyFragment.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Policy fragment description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Format of the policy fragment content.
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
     * Contents of the policy fragment.
     */
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a PolicyFragment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyFragmentArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["format"] = (args ? args.format : undefined) ?? "xml";
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["format"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["value"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20211201preview:PolicyFragment" }, { type: "azure-native:apimanagement/v20220401preview:PolicyFragment" }, { type: "azure-native:apimanagement/v20220801:PolicyFragment" }, { type: "azure-native:apimanagement/v20220901preview:PolicyFragment" }, { type: "azure-native:apimanagement/v20230301preview:PolicyFragment" }, { type: "azure-native:apimanagement/v20230501preview:PolicyFragment" }, { type: "azure-native:apimanagement/v20230901preview:PolicyFragment" }, { type: "azure-native:apimanagement/v20240501:PolicyFragment" }, { type: "azure-native:apimanagement/v20240601preview:PolicyFragment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PolicyFragment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PolicyFragment resource.
 */
export interface PolicyFragmentArgs {
    /**
     * Policy fragment description.
     */
    description?: pulumi.Input<string>;
    /**
     * Format of the policy fragment content.
     */
    format?: pulumi.Input<string | types.enums.PolicyFragmentContentFormat>;
    /**
     * A resource identifier.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Contents of the policy fragment.
     */
    value: pulumi.Input<string>;
}