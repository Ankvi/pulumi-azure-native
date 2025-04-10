import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Cognitive Services account deployment.
 *
 * Uses Azure REST API version 2023-05-01. In version 1.x of the Azure Native provider, it used API version 2021-10-01.
 *
 * Other available API versions: 2023-10-01-preview, 2024-04-01-preview, 2024-06-01-preview, 2024-10-01, 2025-04-01-preview.
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
    public static readonly __pulumiType = 'azure-native:cognitiveservices:Deployment';

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
     * Resource Etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of Cognitive Services account deployment.
     */
    public readonly properties!: pulumi.Output<types.outputs.DeploymentPropertiesResponse>;
    /**
     * The resource model definition representing SKU
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["deploymentName"] = args ? args.deploymentName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cognitiveservices/v20211001:Deployment" }, { type: "azure-native:cognitiveservices/v20220301:Deployment" }, { type: "azure-native:cognitiveservices/v20221001:Deployment" }, { type: "azure-native:cognitiveservices/v20221201:Deployment" }, { type: "azure-native:cognitiveservices/v20230501:Deployment" }, { type: "azure-native:cognitiveservices/v20231001preview:Deployment" }, { type: "azure-native:cognitiveservices/v20240401preview:Deployment" }, { type: "azure-native:cognitiveservices/v20240601preview:Deployment" }, { type: "azure-native:cognitiveservices/v20241001:Deployment" }, { type: "azure-native:cognitiveservices/v20250401preview:Deployment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Deployment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Deployment resource.
 */
export interface DeploymentArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the deployment associated with the Cognitive Services Account
     */
    deploymentName?: pulumi.Input<string>;
    /**
     * Properties of Cognitive Services account deployment.
     */
    properties?: pulumi.Input<types.inputs.DeploymentPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource model definition representing SKU
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
}