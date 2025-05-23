import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of the source control.
 *
 * Uses Azure REST API version 2023-11-01. In version 2.x of the Azure Native provider, it used API version 2022-08-08.
 *
 * Other available API versions: 2017-05-15-preview, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SourceControl extends pulumi.CustomResource {
    /**
     * Get an existing SourceControl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SourceControl {
        return new SourceControl(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automation:SourceControl';

    /**
     * Returns true if the given object is an instance of SourceControl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SourceControl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SourceControl.__pulumiType;
    }

    /**
     * The auto sync of the source control. Default is false.
     */
    public readonly autoSync!: pulumi.Output<boolean | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The repo branch of the source control. Include branch as empty string for VsoTfvc.
     */
    public readonly branch!: pulumi.Output<string | undefined>;
    /**
     * The creation time.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string | undefined>;
    /**
     * The description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The folder path of the source control.
     */
    public readonly folderPath!: pulumi.Output<string | undefined>;
    /**
     * The last modified time.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The auto publish of the source control. Default is true.
     */
    public readonly publishRunbook!: pulumi.Output<boolean | undefined>;
    /**
     * The repo url of the source control.
     */
    public readonly repoUrl!: pulumi.Output<string | undefined>;
    /**
     * The source type. Must be one of VsoGit, VsoTfvc, GitHub.
     */
    public readonly sourceType!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SourceControl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SourceControlArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.automationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["autoSync"] = args ? args.autoSync : undefined;
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["branch"] = args ? args.branch : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["folderPath"] = args ? args.folderPath : undefined;
            resourceInputs["publishRunbook"] = args ? args.publishRunbook : undefined;
            resourceInputs["repoUrl"] = args ? args.repoUrl : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityToken"] = args ? args.securityToken : undefined;
            resourceInputs["sourceControlName"] = args ? args.sourceControlName : undefined;
            resourceInputs["sourceType"] = args ? args.sourceType : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoSync"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["branch"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["folderPath"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["publishRunbook"] = undefined /*out*/;
            resourceInputs["repoUrl"] = undefined /*out*/;
            resourceInputs["sourceType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automation/v20170515preview:SourceControl" }, { type: "azure-native:automation/v20190601:SourceControl" }, { type: "azure-native:automation/v20200113preview:SourceControl" }, { type: "azure-native:automation/v20220808:SourceControl" }, { type: "azure-native:automation/v20230515preview:SourceControl" }, { type: "azure-native:automation/v20231101:SourceControl" }, { type: "azure-native:automation/v20241023:SourceControl" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SourceControl.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SourceControl resource.
 */
export interface SourceControlArgs {
    /**
     * The auto async of the source control. Default is false.
     */
    autoSync?: pulumi.Input<boolean>;
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The repo branch of the source control. Include branch as empty string for VsoTfvc.
     */
    branch?: pulumi.Input<string>;
    /**
     * The user description of the source control.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder path of the source control. Path must be relative.
     */
    folderPath?: pulumi.Input<string>;
    /**
     * The auto publish of the source control. Default is true.
     */
    publishRunbook?: pulumi.Input<boolean>;
    /**
     * The repo url of the source control.
     */
    repoUrl?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The authorization token for the repo of the source control.
     */
    securityToken?: pulumi.Input<types.inputs.SourceControlSecurityTokenPropertiesArgs>;
    /**
     * The source control name.
     */
    sourceControlName?: pulumi.Input<string>;
    /**
     * The source type. Must be one of VsoGit, VsoTfvc, GitHub, case sensitive.
     */
    sourceType?: pulumi.Input<string | types.enums.SourceType>;
}