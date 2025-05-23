import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a Hunt in Azure Security Insights.
 *
 * Uses Azure REST API version 2025-01-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-06-01-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Hunt extends pulumi.CustomResource {
    /**
     * Get an existing Hunt resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Hunt {
        return new Hunt(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights:Hunt';

    /**
     * Returns true if the given object is an instance of Hunt.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Hunt {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Hunt.__pulumiType;
    }

    /**
     * A list of mitre attack tactics the hunt is associated with
     */
    public readonly attackTactics!: pulumi.Output<string[] | undefined>;
    /**
     * A list of a mitre attack techniques the hunt is associated with
     */
    public readonly attackTechniques!: pulumi.Output<string[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The description of the hunt
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The display name of the hunt
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The hypothesis status of the hunt.
     */
    public readonly hypothesisStatus!: pulumi.Output<string | undefined>;
    /**
     * List of labels relevant to this hunt 
     */
    public readonly labels!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Describes a user that the hunt is assigned to
     */
    public readonly owner!: pulumi.Output<types.outputs.HuntOwnerResponse | undefined>;
    /**
     * The status of the hunt.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Hunt resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HuntArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["attackTactics"] = args ? args.attackTactics : undefined;
            resourceInputs["attackTechniques"] = args ? args.attackTechniques : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["huntId"] = args ? args.huntId : undefined;
            resourceInputs["hypothesisStatus"] = (args ? args.hypothesisStatus : undefined) ?? "Unknown";
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["owner"] = args ? args.owner : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["status"] = (args ? args.status : undefined) ?? "New";
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["attackTactics"] = undefined /*out*/;
            resourceInputs["attackTechniques"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hypothesisStatus"] = undefined /*out*/;
            resourceInputs["labels"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights/v20230401preview:Hunt" }, { type: "azure-native:securityinsights/v20230501preview:Hunt" }, { type: "azure-native:securityinsights/v20230601preview:Hunt" }, { type: "azure-native:securityinsights/v20230701preview:Hunt" }, { type: "azure-native:securityinsights/v20230801preview:Hunt" }, { type: "azure-native:securityinsights/v20230901preview:Hunt" }, { type: "azure-native:securityinsights/v20231001preview:Hunt" }, { type: "azure-native:securityinsights/v20231201preview:Hunt" }, { type: "azure-native:securityinsights/v20240101preview:Hunt" }, { type: "azure-native:securityinsights/v20240401preview:Hunt" }, { type: "azure-native:securityinsights/v20241001preview:Hunt" }, { type: "azure-native:securityinsights/v20250101preview:Hunt" }, { type: "azure-native:securityinsights/v20250401preview:Hunt" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Hunt.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Hunt resource.
 */
export interface HuntArgs {
    /**
     * A list of mitre attack tactics the hunt is associated with
     */
    attackTactics?: pulumi.Input<pulumi.Input<string | types.enums.AttackTactic>[]>;
    /**
     * A list of a mitre attack techniques the hunt is associated with
     */
    attackTechniques?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The description of the hunt
     */
    description: pulumi.Input<string>;
    /**
     * The display name of the hunt
     */
    displayName: pulumi.Input<string>;
    /**
     * The hunt id (GUID)
     */
    huntId?: pulumi.Input<string>;
    /**
     * The hypothesis status of the hunt.
     */
    hypothesisStatus?: pulumi.Input<string | types.enums.HypothesisStatus>;
    /**
     * List of labels relevant to this hunt 
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Describes a user that the hunt is assigned to
     */
    owner?: pulumi.Input<types.inputs.HuntOwnerArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The status of the hunt.
     */
    status?: pulumi.Input<string | types.enums.Status>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}