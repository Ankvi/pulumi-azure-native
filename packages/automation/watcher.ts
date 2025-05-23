import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of the watcher type.
 *
 * Uses Azure REST API version 2023-05-15-preview. In version 2.x of the Azure Native provider, it used API version 2020-01-13-preview.
 *
 * Other available API versions: 2015-10-31, 2019-06-01, 2020-01-13-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Watcher extends pulumi.CustomResource {
    /**
     * Get an existing Watcher resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Watcher {
        return new Watcher(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automation:Watcher';

    /**
     * Returns true if the given object is an instance of Watcher.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Watcher {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Watcher.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the creation time.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * Gets or sets the description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the etag of the resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the frequency at which the watcher is invoked.
     */
    public readonly executionFrequencyInSeconds!: pulumi.Output<number | undefined>;
    /**
     * Details of the user who last modified the watcher.
     */
    public /*out*/ readonly lastModifiedBy!: pulumi.Output<string>;
    /**
     * Gets or sets the last modified time.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the name of the script the watcher is attached to, i.e. the name of an existing runbook.
     */
    public readonly scriptName!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the parameters of the script.
     */
    public readonly scriptParameters!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets or sets the name of the hybrid worker group the watcher will run on.
     */
    public readonly scriptRunOn!: pulumi.Output<string | undefined>;
    /**
     * Gets the current status of the watcher.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Watcher resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WatcherArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["executionFrequencyInSeconds"] = args ? args.executionFrequencyInSeconds : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scriptName"] = args ? args.scriptName : undefined;
            resourceInputs["scriptParameters"] = args ? args.scriptParameters : undefined;
            resourceInputs["scriptRunOn"] = args ? args.scriptRunOn : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["watcherName"] = args ? args.watcherName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["executionFrequencyInSeconds"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["scriptName"] = undefined /*out*/;
            resourceInputs["scriptParameters"] = undefined /*out*/;
            resourceInputs["scriptRunOn"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automation/v20151031:Watcher" }, { type: "azure-native:automation/v20190601:Watcher" }, { type: "azure-native:automation/v20200113preview:Watcher" }, { type: "azure-native:automation/v20230515preview:Watcher" }, { type: "azure-native:automation/v20241023:Watcher" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Watcher.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Watcher resource.
 */
export interface WatcherArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the description.
     */
    description?: pulumi.Input<string>;
    /**
     * Gets or sets the frequency at which the watcher is invoked.
     */
    executionFrequencyInSeconds?: pulumi.Input<number>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the name of the script the watcher is attached to, i.e. the name of an existing runbook.
     */
    scriptName?: pulumi.Input<string>;
    /**
     * Gets or sets the parameters of the script.
     */
    scriptParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the name of the hybrid worker group the watcher will run on.
     */
    scriptRunOn?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The watcher name.
     */
    watcherName?: pulumi.Input<string>;
}