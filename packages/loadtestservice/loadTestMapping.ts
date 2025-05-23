import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * LoadTest mapping resource details
 *
 * Uses Azure REST API version 2023-12-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-12-01-preview.
 *
 * Other available API versions: 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native loadtestservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class LoadTestMapping extends pulumi.CustomResource {
    /**
     * Get an existing LoadTestMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LoadTestMapping {
        return new LoadTestMapping(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:loadtestservice:LoadTestMapping';

    /**
     * Returns true if the given object is an instance of LoadTestMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadTestMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadTestMapping.__pulumiType;
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
     * Mapped Azure Load Test resource test-id.
     */
    public readonly testId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LoadTestMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadTestMappingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["azureLoadTestingResourceId"] = args ? args.azureLoadTestingResourceId : undefined;
            resourceInputs["loadTestMappingName"] = args ? args.loadTestMappingName : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["sourceResourceId"] = args ? args.sourceResourceId : undefined;
            resourceInputs["testId"] = args ? args.testId : undefined;
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
            resourceInputs["testId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:loadtestservice/v20231201preview:LoadTestMapping" }, { type: "azure-native:loadtestservice/v20241201preview:LoadTestMapping" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LoadTestMapping.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LoadTestMapping resource.
 */
export interface LoadTestMappingArgs {
    /**
     * Mapped Azure Load Test resource Id.
     */
    azureLoadTestingResourceId?: pulumi.Input<string>;
    /**
     * Load Test Mapping name
     */
    loadTestMappingName?: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * Mapped source resource Id.
     */
    sourceResourceId?: pulumi.Input<string>;
    /**
     * Mapped Azure Load Test resource test-id.
     */
    testId?: pulumi.Input<string>;
}