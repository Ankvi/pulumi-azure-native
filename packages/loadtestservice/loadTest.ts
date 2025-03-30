import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * LoadTest details.
 *
 * Uses Azure REST API version 2022-12-01. In version 1.x of the Azure Native provider, it used API version 2021-12-01-preview.
 *
 * Other available API versions: 2021-12-01-preview, 2023-12-01-preview, 2024-12-01-preview.
 */
export class LoadTest extends pulumi.CustomResource {
    /**
     * Get an existing LoadTest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LoadTest {
        return new LoadTest(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:loadtestservice:LoadTest';

    /**
     * Returns true if the given object is an instance of LoadTest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadTest {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadTest.__pulumiType;
    }

    /**
     * Resource data plane URI.
     */
    public /*out*/ readonly dataPlaneURI!: pulumi.Output<string>;
    /**
     * Description of the resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * CMK Encryption property.
     */
    public readonly encryption!: pulumi.Output<types.outputs.EncryptionPropertiesResponse | undefined>;
    /**
     * The managed service identities assigned to this resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LoadTest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadTestArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["loadTestName"] = args ? args.loadTestName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["dataPlaneURI"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataPlaneURI"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:loadtestservice/v20211201preview:LoadTest" }, { type: "azure-native:loadtestservice/v20220415preview:LoadTest" }, { type: "azure-native:loadtestservice/v20221201:LoadTest" }, { type: "azure-native:loadtestservice/v20231201preview:LoadTest" }, { type: "azure-native:loadtestservice/v20241201preview:LoadTest" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LoadTest.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LoadTest resource.
 */
export interface LoadTestArgs {
    /**
     * Description of the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * CMK Encryption property.
     */
    encryption?: pulumi.Input<types.inputs.EncryptionPropertiesArgs>;
    /**
     * The managed service identities assigned to this resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Load Test name
     */
    loadTestName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}