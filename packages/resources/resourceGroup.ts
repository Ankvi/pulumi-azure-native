import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource group information.
 *
 * Uses Azure REST API version 2024-03-01. In version 2.x of the Azure Native provider, it used API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2021-01-01, 2021-04-01, 2022-09-01, 2023-07-01, 2024-07-01, 2024-11-01, 2025-03-01, 2025-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resources [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ResourceGroup extends pulumi.CustomResource {
    /**
     * Get an existing ResourceGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ResourceGroup {
        return new ResourceGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:resources:ResourceGroup';

    /**
     * Returns true if the given object is an instance of ResourceGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ResourceGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ResourceGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The ID of the resource that manages this resource group.
     */
    public readonly managedBy!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource group properties.
     */
    public /*out*/ readonly properties!: pulumi.Output<types.outputs.ResourceGroupPropertiesResponse>;
    /**
     * The tags attached to the resource group.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource group.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ResourceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ResourceGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedBy"] = args ? args.managedBy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:resources/v20151101:ResourceGroup" }, { type: "azure-native:resources/v20160201:ResourceGroup" }, { type: "azure-native:resources/v20160701:ResourceGroup" }, { type: "azure-native:resources/v20160901:ResourceGroup" }, { type: "azure-native:resources/v20170510:ResourceGroup" }, { type: "azure-native:resources/v20180201:ResourceGroup" }, { type: "azure-native:resources/v20180501:ResourceGroup" }, { type: "azure-native:resources/v20190301:ResourceGroup" }, { type: "azure-native:resources/v20190501:ResourceGroup" }, { type: "azure-native:resources/v20190510:ResourceGroup" }, { type: "azure-native:resources/v20190701:ResourceGroup" }, { type: "azure-native:resources/v20190801:ResourceGroup" }, { type: "azure-native:resources/v20191001:ResourceGroup" }, { type: "azure-native:resources/v20200601:ResourceGroup" }, { type: "azure-native:resources/v20200801:ResourceGroup" }, { type: "azure-native:resources/v20201001:ResourceGroup" }, { type: "azure-native:resources/v20210101:ResourceGroup" }, { type: "azure-native:resources/v20210401:ResourceGroup" }, { type: "azure-native:resources/v20220901:ResourceGroup" }, { type: "azure-native:resources/v20230701:ResourceGroup" }, { type: "azure-native:resources/v20240301:ResourceGroup" }, { type: "azure-native:resources/v20240701:ResourceGroup" }, { type: "azure-native:resources/v20241101:ResourceGroup" }, { type: "azure-native:resources/v20250301:ResourceGroup" }, { type: "azure-native:resources/v20250401:ResourceGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ResourceGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ResourceGroup resource.
 */
export interface ResourceGroupArgs {
    /**
     * The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
     */
    location?: pulumi.Input<string>;
    /**
     * The ID of the resource that manages this resource group.
     */
    managedBy?: pulumi.Input<string>;
    /**
     * The name of the resource group to create or update. Can include alphanumeric, underscore, parentheses, hyphen, period (except at end), and Unicode characters that match the allowed characters.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The tags attached to the resource group.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}