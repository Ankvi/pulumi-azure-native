import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Deployment resource payload
 *
 * Uses Azure REST API version 2024-01-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-05-01-preview.
 *
 * Other available API versions: 2023-05-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native appplatform [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Deployment extends pulumi.CustomResource {
    /**
     * Get an existing Deployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Deployment {
        return new Deployment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appplatform:Deployment';

    /**
     * Returns true if the given object is an instance of Deployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Deployment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Deployment.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the Deployment resource
     */
    public readonly properties!: pulumi.Output<types.outputs.DeploymentResourcePropertiesResponse>;
    /**
     * Sku of the Deployment resource
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Deployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeploymentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.appName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["appName"] = args ? args.appName : undefined;
            resourceInputs["deploymentName"] = args ? args.deploymentName : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.deploymentResourcePropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["sku"] = args ? (args.sku ? pulumi.output(args.sku).apply(types.inputs.skuArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:appplatform/v20200701:Deployment" }, { type: "azure-native:appplatform/v20201101preview:Deployment" }, { type: "azure-native:appplatform/v20210601preview:Deployment" }, { type: "azure-native:appplatform/v20210901preview:Deployment" }, { type: "azure-native:appplatform/v20220101preview:Deployment" }, { type: "azure-native:appplatform/v20220301preview:Deployment" }, { type: "azure-native:appplatform/v20220401:Deployment" }, { type: "azure-native:appplatform/v20220501preview:Deployment" }, { type: "azure-native:appplatform/v20220901preview:Deployment" }, { type: "azure-native:appplatform/v20221101preview:Deployment" }, { type: "azure-native:appplatform/v20221201:Deployment" }, { type: "azure-native:appplatform/v20230101preview:Deployment" }, { type: "azure-native:appplatform/v20230301preview:Deployment" }, { type: "azure-native:appplatform/v20230501preview:Deployment" }, { type: "azure-native:appplatform/v20230701preview:Deployment" }, { type: "azure-native:appplatform/v20230901preview:Deployment" }, { type: "azure-native:appplatform/v20231101preview:Deployment" }, { type: "azure-native:appplatform/v20231201:Deployment" }, { type: "azure-native:appplatform/v20240101preview:Deployment" }, { type: "azure-native:appplatform/v20240501preview:Deployment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Deployment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Deployment resource.
 */
export interface DeploymentArgs {
    /**
     * The name of the App resource.
     */
    appName: pulumi.Input<string>;
    /**
     * The name of the Deployment resource.
     */
    deploymentName?: pulumi.Input<string>;
    /**
     * Properties of the Deployment resource
     */
    properties?: pulumi.Input<types.inputs.DeploymentResourcePropertiesArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Sku of the Deployment resource
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
}