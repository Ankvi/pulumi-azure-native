import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Source control configuration for an app.
 *
 * Uses Azure REST API version 2022-09-01. In version 1.x of the Azure Native provider, it used API version 2020-12-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export class WebAppSourceControl extends pulumi.CustomResource {
    /**
     * Get an existing WebAppSourceControl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppSourceControl {
        return new WebAppSourceControl(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppSourceControl';

    /**
     * Returns true if the given object is an instance of WebAppSourceControl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppSourceControl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppSourceControl.__pulumiType;
    }

    /**
     * Name of branch to use for deployment.
     */
    public readonly branch!: pulumi.Output<string | undefined>;
    /**
     * <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
     */
    public readonly deploymentRollbackEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * If GitHub Action is selected, than the associated configuration.
     */
    public readonly gitHubActionConfiguration!: pulumi.Output<types.outputs.GitHubActionConfigurationResponse | undefined>;
    /**
     * <code>true</code> if this is deployed via GitHub action.
     */
    public readonly isGitHubAction!: pulumi.Output<boolean | undefined>;
    /**
     * <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
     */
    public readonly isManualIntegration!: pulumi.Output<boolean | undefined>;
    /**
     * <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
     */
    public readonly isMercurial!: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Repository or source control URL.
     */
    public readonly repoUrl!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppSourceControl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppSourceControlArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["branch"] = args ? args.branch : undefined;
            resourceInputs["deploymentRollbackEnabled"] = args ? args.deploymentRollbackEnabled : undefined;
            resourceInputs["gitHubActionConfiguration"] = args ? args.gitHubActionConfiguration : undefined;
            resourceInputs["isGitHubAction"] = args ? args.isGitHubAction : undefined;
            resourceInputs["isManualIntegration"] = args ? args.isManualIntegration : undefined;
            resourceInputs["isMercurial"] = args ? args.isMercurial : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["repoUrl"] = args ? args.repoUrl : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["branch"] = undefined /*out*/;
            resourceInputs["deploymentRollbackEnabled"] = undefined /*out*/;
            resourceInputs["gitHubActionConfiguration"] = undefined /*out*/;
            resourceInputs["isGitHubAction"] = undefined /*out*/;
            resourceInputs["isManualIntegration"] = undefined /*out*/;
            resourceInputs["isMercurial"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["repoUrl"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20150801:WebAppSourceControl" }, { type: "azure-native:web/v20160801:WebAppSourceControl" }, { type: "azure-native:web/v20180201:WebAppSourceControl" }, { type: "azure-native:web/v20181101:WebAppSourceControl" }, { type: "azure-native:web/v20190801:WebAppSourceControl" }, { type: "azure-native:web/v20200601:WebAppSourceControl" }, { type: "azure-native:web/v20200901:WebAppSourceControl" }, { type: "azure-native:web/v20201001:WebAppSourceControl" }, { type: "azure-native:web/v20201201:WebAppSourceControl" }, { type: "azure-native:web/v20210101:WebAppSourceControl" }, { type: "azure-native:web/v20210115:WebAppSourceControl" }, { type: "azure-native:web/v20210201:WebAppSourceControl" }, { type: "azure-native:web/v20210301:WebAppSourceControl" }, { type: "azure-native:web/v20220301:WebAppSourceControl" }, { type: "azure-native:web/v20220901:WebAppSourceControl" }, { type: "azure-native:web/v20230101:WebAppSourceControl" }, { type: "azure-native:web/v20231201:WebAppSourceControl" }, { type: "azure-native:web/v20240401:WebAppSourceControl" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppSourceControl.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppSourceControl resource.
 */
export interface WebAppSourceControlArgs {
    /**
     * Name of branch to use for deployment.
     */
    branch?: pulumi.Input<string>;
    /**
     * <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
     */
    deploymentRollbackEnabled?: pulumi.Input<boolean>;
    /**
     * If GitHub Action is selected, than the associated configuration.
     */
    gitHubActionConfiguration?: pulumi.Input<types.inputs.GitHubActionConfigurationArgs>;
    /**
     * <code>true</code> if this is deployed via GitHub action.
     */
    isGitHubAction?: pulumi.Input<boolean>;
    /**
     * <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
     */
    isManualIntegration?: pulumi.Input<boolean>;
    /**
     * <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
     */
    isMercurial?: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Repository or source control URL.
     */
    repoUrl?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}