import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a relation between two resources
 */
export class IncidentRelation extends pulumi.CustomResource {
    /**
     * Get an existing IncidentRelation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IncidentRelation {
        return new IncidentRelation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230801preview:IncidentRelation';

    /**
     * Returns true if the given object is an instance of IncidentRelation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IncidentRelation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IncidentRelation.__pulumiType;
    }

    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource ID of the related resource
     */
    public readonly relatedResourceId!: pulumi.Output<string>;
    /**
     * The resource kind of the related resource
     */
    public /*out*/ readonly relatedResourceKind!: pulumi.Output<string>;
    /**
     * The name of the related resource
     */
    public /*out*/ readonly relatedResourceName!: pulumi.Output<string>;
    /**
     * The resource type of the related resource
     */
    public /*out*/ readonly relatedResourceType!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IncidentRelation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IncidentRelationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.incidentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'incidentId'");
            }
            if ((!args || args.relatedResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'relatedResourceId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["incidentId"] = args ? args.incidentId : undefined;
            resourceInputs["relatedResourceId"] = args ? args.relatedResourceId : undefined;
            resourceInputs["relationName"] = args ? args.relationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["relatedResourceKind"] = undefined /*out*/;
            resourceInputs["relatedResourceName"] = undefined /*out*/;
            resourceInputs["relatedResourceType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["relatedResourceId"] = undefined /*out*/;
            resourceInputs["relatedResourceKind"] = undefined /*out*/;
            resourceInputs["relatedResourceName"] = undefined /*out*/;
            resourceInputs["relatedResourceType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:IncidentRelation" }, { type: "azure-native:securityinsights/v20190101preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20210301preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20210401:IncidentRelation" }, { type: "azure-native:securityinsights/v20210901preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20211001:IncidentRelation" }, { type: "azure-native:securityinsights/v20211001preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20220101preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20220401preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20220501preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20220601preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20220701preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20220801:IncidentRelation" }, { type: "azure-native:securityinsights/v20220801preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20220901preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20221001preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20221101:IncidentRelation" }, { type: "azure-native:securityinsights/v20221101preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20221201preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20230201:IncidentRelation" }, { type: "azure-native:securityinsights/v20230201preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20230301preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20230401preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20230501preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20230601preview:IncidentRelation" }, { type: "azure-native:securityinsights/v20230701preview:IncidentRelation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IncidentRelation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IncidentRelation resource.
 */
export interface IncidentRelationArgs {
    /**
     * Incident ID
     */
    incidentId: pulumi.Input<string>;
    /**
     * The resource ID of the related resource
     */
    relatedResourceId: pulumi.Input<string>;
    /**
     * Relation Name
     */
    relationName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
