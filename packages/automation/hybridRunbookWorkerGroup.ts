import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of hybrid runbook worker group.
 *
 * Uses Azure REST API version 2023-11-01. In version 2.x of the Azure Native provider, it used API version 2022-08-08.
 *
 * Other available API versions: 2021-06-22, 2022-02-22, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class HybridRunbookWorkerGroup extends pulumi.CustomResource {
    /**
     * Get an existing HybridRunbookWorkerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HybridRunbookWorkerGroup {
        return new HybridRunbookWorkerGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automation:HybridRunbookWorkerGroup';

    /**
     * Returns true if the given object is an instance of HybridRunbookWorkerGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HybridRunbookWorkerGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HybridRunbookWorkerGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Sets the credential of a worker group.
     */
    public readonly credential!: pulumi.Output<types.outputs.RunAsCredentialAssociationPropertyResponse | undefined>;
    /**
     * Type of the HybridWorkerGroup.
     */
    public /*out*/ readonly groupType!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Resource system metadata.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a HybridRunbookWorkerGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HybridRunbookWorkerGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.automationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["credential"] = args ? args.credential : undefined;
            resourceInputs["hybridRunbookWorkerGroupName"] = args ? args.hybridRunbookWorkerGroupName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["groupType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["credential"] = undefined /*out*/;
            resourceInputs["groupType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automation/v20210622:HybridRunbookWorkerGroup" }, { type: "azure-native:automation/v20220222:HybridRunbookWorkerGroup" }, { type: "azure-native:automation/v20220808:HybridRunbookWorkerGroup" }, { type: "azure-native:automation/v20230515preview:HybridRunbookWorkerGroup" }, { type: "azure-native:automation/v20231101:HybridRunbookWorkerGroup" }, { type: "azure-native:automation/v20241023:HybridRunbookWorkerGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HybridRunbookWorkerGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HybridRunbookWorkerGroup resource.
 */
export interface HybridRunbookWorkerGroupArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Sets the credential of a worker group.
     */
    credential?: pulumi.Input<types.inputs.RunAsCredentialAssociationPropertyArgs>;
    /**
     * The hybrid runbook worker group name
     */
    hybridRunbookWorkerGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the name of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}