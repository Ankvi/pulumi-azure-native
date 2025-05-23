import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * LoadTest profile mapping resource details
 *
 * Uses Azure REST API version 2023-12-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-12-01-preview.
 *
 * Other available API versions: 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native loadtestservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class LoadTestProfileMapping extends pulumi.CustomResource {
    /**
     * Get an existing LoadTestProfileMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LoadTestProfileMapping {
        return new LoadTestProfileMapping(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:loadtestservice:LoadTestProfileMapping';

    /**
     * Returns true if the given object is an instance of LoadTestProfileMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadTestProfileMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadTestProfileMapping.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Mapped Azure Load Test resource Id.
     */
    public readonly azureLoadTestingResourceId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Mapped source resource Id.
     */
    public readonly sourceResourceId!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Mapped Azure Load Test resource test-profile-id.
     */
    public readonly testProfileId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LoadTestProfileMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadTestProfileMappingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["azureLoadTestingResourceId"] = args ? args.azureLoadTestingResourceId : undefined;
            resourceInputs["loadTestProfileMappingName"] = args ? args.loadTestProfileMappingName : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["sourceResourceId"] = args ? args.sourceResourceId : undefined;
            resourceInputs["testProfileId"] = args ? args.testProfileId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["azureLoadTestingResourceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sourceResourceId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["testProfileId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:loadtestservice/v20231201preview:LoadTestProfileMapping" }, { type: "azure-native:loadtestservice/v20241201preview:LoadTestProfileMapping" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LoadTestProfileMapping.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LoadTestProfileMapping resource.
 */
export interface LoadTestProfileMappingArgs {
    /**
     * Mapped Azure Load Test resource Id.
     */
    azureLoadTestingResourceId?: pulumi.Input<string>;
    /**
     * Load Test Profile Mapping name
     */
    loadTestProfileMappingName?: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * Mapped source resource Id.
     */
    sourceResourceId?: pulumi.Input<string>;
    /**
     * Mapped Azure Load Test resource test-profile-id.
     */
    testProfileId?: pulumi.Input<string>;
}