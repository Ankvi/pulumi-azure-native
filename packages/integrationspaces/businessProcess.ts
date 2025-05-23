import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A business process under application.
 *
 * Uses Azure REST API version 2023-11-14-preview. In version 2.x of the Azure Native provider, it used API version 2023-11-14-preview.
 */
export class BusinessProcess extends pulumi.CustomResource {
    /**
     * Get an existing BusinessProcess resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BusinessProcess {
        return new BusinessProcess(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:integrationspaces:BusinessProcess';

    /**
     * Returns true if the given object is an instance of BusinessProcess.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BusinessProcess {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BusinessProcess.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The business process mapping.
     */
    public readonly businessProcessMapping!: pulumi.Output<{[key: string]: types.outputs.BusinessProcessMappingItemResponse} | undefined>;
    /**
     * The business process stages.
     */
    public readonly businessProcessStages!: pulumi.Output<{[key: string]: types.outputs.BusinessProcessStageResponse} | undefined>;
    /**
     * The description of the business process.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The business process identifier.
     */
    public readonly identifier!: pulumi.Output<types.outputs.BusinessProcessIdentifierResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The table name of the business process.
     */
    public readonly tableName!: pulumi.Output<string | undefined>;
    /**
     * The tracking data store reference name.
     */
    public readonly trackingDataStoreReferenceName!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The version of the business process.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a BusinessProcess resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BusinessProcessArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.applicationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.spaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'spaceName'");
            }
            resourceInputs["applicationName"] = args ? args.applicationName : undefined;
            resourceInputs["businessProcessMapping"] = args ? args.businessProcessMapping : undefined;
            resourceInputs["businessProcessName"] = args ? args.businessProcessName : undefined;
            resourceInputs["businessProcessStages"] = args ? args.businessProcessStages : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["identifier"] = args ? args.identifier : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["spaceName"] = args ? args.spaceName : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["trackingDataStoreReferenceName"] = args ? args.trackingDataStoreReferenceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["businessProcessMapping"] = undefined /*out*/;
            resourceInputs["businessProcessStages"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["identifier"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tableName"] = undefined /*out*/;
            resourceInputs["trackingDataStoreReferenceName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:integrationspaces/v20231114preview:BusinessProcess" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BusinessProcess.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BusinessProcess resource.
 */
export interface BusinessProcessArgs {
    /**
     * The name of the Application
     */
    applicationName: pulumi.Input<string>;
    /**
     * The business process mapping.
     */
    businessProcessMapping?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.BusinessProcessMappingItemArgs>}>;
    /**
     * The name of the business process
     */
    businessProcessName?: pulumi.Input<string>;
    /**
     * The business process stages.
     */
    businessProcessStages?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.BusinessProcessStageArgs>}>;
    /**
     * The description of the business process.
     */
    description?: pulumi.Input<string>;
    /**
     * The business process identifier.
     */
    identifier?: pulumi.Input<types.inputs.BusinessProcessIdentifierArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the space
     */
    spaceName: pulumi.Input<string>;
    /**
     * The table name of the business process.
     */
    tableName?: pulumi.Input<string>;
    /**
     * The tracking data store reference name.
     */
    trackingDataStoreReferenceName?: pulumi.Input<string>;
}