import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export class Incident extends pulumi.CustomResource {
    /**
     * Get an existing Incident resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Incident {
        return new Incident(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230601preview:Incident';

    /**
     * Returns true if the given object is an instance of Incident.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Incident {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Incident.__pulumiType;
    }

    /**
     * Additional data on the incident
     */
    public /*out*/ readonly additionalData!: pulumi.Output<types.outputs.IncidentAdditionalDataResponse>;
    /**
     * The reason the incident was closed
     */
    public readonly classification!: pulumi.Output<string | undefined>;
    /**
     * Describes the reason the incident was closed
     */
    public readonly classificationComment!: pulumi.Output<string | undefined>;
    /**
     * The classification reason the incident was closed with
     */
    public readonly classificationReason!: pulumi.Output<string | undefined>;
    /**
     * The time the incident was created
     */
    public /*out*/ readonly createdTimeUtc!: pulumi.Output<string>;
    /**
     * The description of the incident
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The time of the first activity in the incident
     */
    public readonly firstActivityTimeUtc!: pulumi.Output<string | undefined>;
    /**
     * A sequential number
     */
    public /*out*/ readonly incidentNumber!: pulumi.Output<number>;
    /**
     * The deep-link url to the incident in Azure portal
     */
    public /*out*/ readonly incidentUrl!: pulumi.Output<string>;
    /**
     * List of labels relevant to this incident
     */
    public readonly labels!: pulumi.Output<types.outputs.IncidentLabelResponse[] | undefined>;
    /**
     * The time of the last activity in the incident
     */
    public readonly lastActivityTimeUtc!: pulumi.Output<string | undefined>;
    /**
     * The last time the incident was updated
     */
    public /*out*/ readonly lastModifiedTimeUtc!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Describes a user that the incident is assigned to
     */
    public readonly owner!: pulumi.Output<types.outputs.IncidentOwnerInfoResponse | undefined>;
    /**
     * The incident ID assigned by the incident provider
     */
    public /*out*/ readonly providerIncidentId!: pulumi.Output<string>;
    /**
     * The name of the source provider that generated the incident
     */
    public /*out*/ readonly providerName!: pulumi.Output<string>;
    /**
     * List of resource ids of Analytic rules related to the incident
     */
    public /*out*/ readonly relatedAnalyticRuleIds!: pulumi.Output<string[]>;
    /**
     * The severity of the incident
     */
    public readonly severity!: pulumi.Output<string>;
    /**
     * The status of the incident
     */
    public readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Describes a team for the incident
     */
    public /*out*/ readonly teamInformation!: pulumi.Output<types.outputs.TeamInformationResponse | undefined>;
    /**
     * The title of the incident
     */
    public readonly title!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Incident resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IncidentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.severity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'severity'");
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
            resourceInputs["classification"] = args ? args.classification : undefined;
            resourceInputs["classificationComment"] = args ? args.classificationComment : undefined;
            resourceInputs["classificationReason"] = args ? args.classificationReason : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["firstActivityTimeUtc"] = args ? args.firstActivityTimeUtc : undefined;
            resourceInputs["incidentId"] = args ? args.incidentId : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["lastActivityTimeUtc"] = args ? args.lastActivityTimeUtc : undefined;
            resourceInputs["owner"] = args ? args.owner : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["additionalData"] = undefined /*out*/;
            resourceInputs["createdTimeUtc"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["incidentNumber"] = undefined /*out*/;
            resourceInputs["incidentUrl"] = undefined /*out*/;
            resourceInputs["lastModifiedTimeUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["providerIncidentId"] = undefined /*out*/;
            resourceInputs["providerName"] = undefined /*out*/;
            resourceInputs["relatedAnalyticRuleIds"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["teamInformation"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalData"] = undefined /*out*/;
            resourceInputs["classification"] = undefined /*out*/;
            resourceInputs["classificationComment"] = undefined /*out*/;
            resourceInputs["classificationReason"] = undefined /*out*/;
            resourceInputs["createdTimeUtc"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["firstActivityTimeUtc"] = undefined /*out*/;
            resourceInputs["incidentNumber"] = undefined /*out*/;
            resourceInputs["incidentUrl"] = undefined /*out*/;
            resourceInputs["labels"] = undefined /*out*/;
            resourceInputs["lastActivityTimeUtc"] = undefined /*out*/;
            resourceInputs["lastModifiedTimeUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["providerIncidentId"] = undefined /*out*/;
            resourceInputs["providerName"] = undefined /*out*/;
            resourceInputs["relatedAnalyticRuleIds"] = undefined /*out*/;
            resourceInputs["severity"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["teamInformation"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:Incident" }, { type: "azure-native:securityinsights/v20190101preview:Incident" }, { type: "azure-native:securityinsights/v20200101:Incident" }, { type: "azure-native:securityinsights/v20210301preview:Incident" }, { type: "azure-native:securityinsights/v20210401:Incident" }, { type: "azure-native:securityinsights/v20210901preview:Incident" }, { type: "azure-native:securityinsights/v20211001:Incident" }, { type: "azure-native:securityinsights/v20211001preview:Incident" }, { type: "azure-native:securityinsights/v20220101preview:Incident" }, { type: "azure-native:securityinsights/v20220401preview:Incident" }, { type: "azure-native:securityinsights/v20220501preview:Incident" }, { type: "azure-native:securityinsights/v20220601preview:Incident" }, { type: "azure-native:securityinsights/v20220701preview:Incident" }, { type: "azure-native:securityinsights/v20220801:Incident" }, { type: "azure-native:securityinsights/v20220801preview:Incident" }, { type: "azure-native:securityinsights/v20220901preview:Incident" }, { type: "azure-native:securityinsights/v20221001preview:Incident" }, { type: "azure-native:securityinsights/v20221101:Incident" }, { type: "azure-native:securityinsights/v20221101preview:Incident" }, { type: "azure-native:securityinsights/v20221201preview:Incident" }, { type: "azure-native:securityinsights/v20230201:Incident" }, { type: "azure-native:securityinsights/v20230201preview:Incident" }, { type: "azure-native:securityinsights/v20230301preview:Incident" }, { type: "azure-native:securityinsights/v20230401preview:Incident" }, { type: "azure-native:securityinsights/v20230501preview:Incident" }, { type: "azure-native:securityinsights/v20230701preview:Incident" }, { type: "azure-native:securityinsights/v20230801preview:Incident" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Incident.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Incident resource.
 */
export interface IncidentArgs {
    /**
     * The reason the incident was closed
     */
    classification?: pulumi.Input<string | types.enums.IncidentClassification>;
    /**
     * Describes the reason the incident was closed
     */
    classificationComment?: pulumi.Input<string>;
    /**
     * The classification reason the incident was closed with
     */
    classificationReason?: pulumi.Input<string | types.enums.IncidentClassificationReason>;
    /**
     * The description of the incident
     */
    description?: pulumi.Input<string>;
    /**
     * The time of the first activity in the incident
     */
    firstActivityTimeUtc?: pulumi.Input<string>;
    /**
     * Incident ID
     */
    incidentId?: pulumi.Input<string>;
    /**
     * List of labels relevant to this incident
     */
    labels?: pulumi.Input<pulumi.Input<types.inputs.IncidentLabelArgs>[]>;
    /**
     * The time of the last activity in the incident
     */
    lastActivityTimeUtc?: pulumi.Input<string>;
    /**
     * Describes a user that the incident is assigned to
     */
    owner?: pulumi.Input<types.inputs.IncidentOwnerInfoArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The severity of the incident
     */
    severity: pulumi.Input<string | types.enums.IncidentSeverity>;
    /**
     * The status of the incident
     */
    status: pulumi.Input<string | types.enums.IncidentStatus>;
    /**
     * The title of the incident
     */
    title: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
