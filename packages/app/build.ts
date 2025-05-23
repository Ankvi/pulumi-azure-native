import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Information pertaining to an individual build.
 *
 * Uses Azure REST API version 2024-10-02-preview. In version 2.x of the Azure Native provider, it used API version 2023-08-01-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Build extends pulumi.CustomResource {
    /**
     * Get an existing Build resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Build {
        return new Build(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app:Build';

    /**
     * Returns true if the given object is an instance of Build.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Build {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Build.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Status of the build once it has been provisioned.
     */
    public /*out*/ readonly buildStatus!: pulumi.Output<string>;
    /**
     * Configuration of the build.
     */
    public readonly configuration!: pulumi.Output<types.outputs.BuildConfigurationResponse | undefined>;
    /**
     * Container registry that the final image will be uploaded to.
     */
    public readonly destinationContainerRegistry!: pulumi.Output<types.outputs.ContainerRegistryWithCustomImageResponse | undefined>;
    /**
     * Endpoint from which the build logs can be streamed.
     */
    public /*out*/ readonly logStreamEndpoint!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Build provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Endpoint to use to retrieve an authentication token for log streaming and uploading source code.
     */
    public /*out*/ readonly tokenEndpoint!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Endpoint to which the source code should be uploaded.
     */
    public /*out*/ readonly uploadEndpoint!: pulumi.Output<string>;

    /**
     * Create a Build resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BuildArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.builderName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'builderName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["buildName"] = args ? args.buildName : undefined;
            resourceInputs["builderName"] = args ? args.builderName : undefined;
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["destinationContainerRegistry"] = args ? args.destinationContainerRegistry : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["buildStatus"] = undefined /*out*/;
            resourceInputs["logStreamEndpoint"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tokenEndpoint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uploadEndpoint"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["buildStatus"] = undefined /*out*/;
            resourceInputs["configuration"] = undefined /*out*/;
            resourceInputs["destinationContainerRegistry"] = undefined /*out*/;
            resourceInputs["logStreamEndpoint"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tokenEndpoint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uploadEndpoint"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app/v20230801preview:Build" }, { type: "azure-native:app/v20231102preview:Build" }, { type: "azure-native:app/v20240202preview:Build" }, { type: "azure-native:app/v20240802preview:Build" }, { type: "azure-native:app/v20241002preview:Build" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Build.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Build resource.
 */
export interface BuildArgs {
    /**
     * The name of a build.
     */
    buildName?: pulumi.Input<string>;
    /**
     * The name of the builder.
     */
    builderName: pulumi.Input<string>;
    /**
     * Configuration of the build.
     */
    configuration?: pulumi.Input<types.inputs.BuildConfigurationArgs>;
    /**
     * Container registry that the final image will be uploaded to.
     */
    destinationContainerRegistry?: pulumi.Input<types.inputs.ContainerRegistryWithCustomImageArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}