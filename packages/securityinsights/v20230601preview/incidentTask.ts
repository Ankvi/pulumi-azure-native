import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export class IncidentTask extends pulumi.CustomResource {
    /**
     * Get an existing IncidentTask resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IncidentTask {
        return new IncidentTask(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230601preview:IncidentTask';

    /**
     * Returns true if the given object is an instance of IncidentTask.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IncidentTask {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IncidentTask.__pulumiType;
    }

    /**
     * Information on the client (user or application) that made some action
     */
    public readonly createdBy!: pulumi.Output<types.outputs.ClientInfoResponse | undefined>;
    /**
     * The time the task was created
     */
    public /*out*/ readonly createdTimeUtc!: pulumi.Output<string>;
    /**
     * The description of the task
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Information on the client (user or application) that made some action
     */
    public readonly lastModifiedBy!: pulumi.Output<types.outputs.ClientInfoResponse | undefined>;
    /**
     * The last time the task was updated
     */
    public /*out*/ readonly lastModifiedTimeUtc!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The title of the task
     */
    public readonly title!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IncidentTask resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IncidentTaskArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.incidentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'incidentId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.status === undefined) && !opts.urn) {
                throw new Error("Missing required property 'status'");
            }
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["createdBy"] = args ? args.createdBy : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["incidentId"] = args ? args.incidentId : undefined;
            resourceInputs["incidentTaskId"] = args ? args.incidentTaskId : undefined;
            resourceInputs["lastModifiedBy"] = args ? args.lastModifiedBy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["createdTimeUtc"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModifiedTimeUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdTimeUtc"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedTimeUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:IncidentTask" }, { type: "azure-native:securityinsights/v20221201preview:IncidentTask" }, { type: "azure-native:securityinsights/v20230201preview:IncidentTask" }, { type: "azure-native:securityinsights/v20230301preview:IncidentTask" }, { type: "azure-native:securityinsights/v20230401preview:IncidentTask" }, { type: "azure-native:securityinsights/v20230501preview:IncidentTask" }, { type: "azure-native:securityinsights/v20230701preview:IncidentTask" }, { type: "azure-native:securityinsights/v20230801preview:IncidentTask" }, { type: "azure-native:securityinsights/v20230901preview:IncidentTask" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IncidentTask.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IncidentTask resource.
 */
export interface IncidentTaskArgs {
    /**
     * Information on the client (user or application) that made some action
     */
    createdBy?: pulumi.Input<types.inputs.ClientInfoArgs>;
    /**
     * The description of the task
     */
    description?: pulumi.Input<string>;
    /**
     * Incident ID
     */
    incidentId: pulumi.Input<string>;
    /**
     * Incident task ID
     */
    incidentTaskId?: pulumi.Input<string>;
    /**
     * Information on the client (user or application) that made some action
     */
    lastModifiedBy?: pulumi.Input<types.inputs.ClientInfoArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    status: pulumi.Input<string | types.enums.IncidentTaskStatus>;
    /**
     * The title of the task
     */
    title: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
