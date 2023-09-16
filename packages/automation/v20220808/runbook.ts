import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Definition of the runbook type.
 */
export class Runbook extends pulumi.CustomResource {
    /**
     * Get an existing Runbook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Runbook {
        return new Runbook(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automation/v20220808:Runbook';

    /**
     * Returns true if the given object is an instance of Runbook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Runbook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Runbook.__pulumiType;
    }

    /**
     * Gets or sets the creation time.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the draft runbook properties.
     */
    public readonly draft!: pulumi.Output<types.outputs.automation.v20220808.RunbookDraftResponse | undefined>;
    /**
     * Gets or sets the etag of the resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the job count of the runbook.
     */
    public /*out*/ readonly jobCount!: pulumi.Output<number | undefined>;
    /**
     * Gets or sets the last modified by.
     */
    public /*out*/ readonly lastModifiedBy!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the last modified time.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the option to log activity trace of the runbook.
     */
    public readonly logActivityTrace!: pulumi.Output<number | undefined>;
    /**
     * Gets or sets progress log option.
     */
    public readonly logProgress!: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets verbose log option.
     */
    public readonly logVerbose!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the runbook output types.
     */
    public /*out*/ readonly outputTypes!: pulumi.Output<string[] | undefined>;
    /**
     * Gets or sets the runbook parameters.
     */
    public /*out*/ readonly parameters!: pulumi.Output<{[key: string]: types.outputs.automation.v20220808.RunbookParameterResponse} | undefined>;
    /**
     * Gets or sets the provisioning state of the runbook.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the published runbook content link.
     */
    public readonly publishContentLink!: pulumi.Output<types.outputs.automation.v20220808.ContentLinkResponse | undefined>;
    /**
     * Gets or sets the type of the runbook.
     */
    public readonly runbookType!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the state of the runbook.
     */
    public /*out*/ readonly state!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Runbook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RunbookArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.automationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.runbookType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'runbookType'");
            }
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["draft"] = args ? args.draft : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["logActivityTrace"] = args ? args.logActivityTrace : undefined;
            resourceInputs["logProgress"] = args ? args.logProgress : undefined;
            resourceInputs["logVerbose"] = args ? args.logVerbose : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["publishContentLink"] = args ? args.publishContentLink : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["runbookName"] = args ? args.runbookName : undefined;
            resourceInputs["runbookType"] = args ? args.runbookType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["jobCount"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["outputTypes"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["draft"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["jobCount"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["logActivityTrace"] = undefined /*out*/;
            resourceInputs["logProgress"] = undefined /*out*/;
            resourceInputs["logVerbose"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outputTypes"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publishContentLink"] = undefined /*out*/;
            resourceInputs["runbookType"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automation:Runbook" }, { type: "azure-native:automation/v20151031:Runbook" }, { type: "azure-native:automation/v20180630:Runbook" }, { type: "azure-native:automation/v20190601:Runbook" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Runbook.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Runbook resource.
 */
export interface RunbookArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the description of the runbook.
     */
    description?: pulumi.Input<string>;
    /**
     * Gets or sets the draft runbook properties.
     */
    draft?: pulumi.Input<types.inputs.automation.v20220808.RunbookDraftArgs>;
    /**
     * Gets or sets the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Gets or sets the activity-level tracing options of the runbook.
     */
    logActivityTrace?: pulumi.Input<number>;
    /**
     * Gets or sets progress log option.
     */
    logProgress?: pulumi.Input<boolean>;
    /**
     * Gets or sets verbose log option.
     */
    logVerbose?: pulumi.Input<boolean>;
    /**
     * Gets or sets the name of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets or sets the published runbook content link.
     */
    publishContentLink?: pulumi.Input<types.inputs.automation.v20220808.ContentLinkArgs>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The runbook name.
     */
    runbookName?: pulumi.Input<string>;
    /**
     * Gets or sets the type of the runbook.
     */
    runbookType: pulumi.Input<string | types.enums.v20220808.RunbookTypeEnum>;
    /**
     * Gets or sets the tags attached to the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
