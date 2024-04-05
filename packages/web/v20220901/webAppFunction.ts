import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Function information.
 */
export class WebAppFunction extends pulumi.CustomResource {
    /**
     * Get an existing WebAppFunction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppFunction {
        return new WebAppFunction(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20220901:WebAppFunction';

    /**
     * Returns true if the given object is an instance of WebAppFunction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppFunction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppFunction.__pulumiType;
    }

    /**
     * Config information.
     */
    public readonly config!: pulumi.Output<any | undefined>;
    /**
     * Config URI.
     */
    public readonly configHref!: pulumi.Output<string | undefined>;
    /**
     * File list.
     */
    public readonly files!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Function App ID.
     */
    public readonly functionAppId!: pulumi.Output<string | undefined>;
    /**
     * Function URI.
     */
    public readonly href!: pulumi.Output<string | undefined>;
    /**
     * The invocation URL
     */
    public readonly invokeUrlTemplate!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets a value indicating whether the function is disabled
     */
    public readonly isDisabled!: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The function language
     */
    public readonly language!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Script URI.
     */
    public readonly scriptHref!: pulumi.Output<string | undefined>;
    /**
     * Script root path URI.
     */
    public readonly scriptRootPathHref!: pulumi.Output<string | undefined>;
    /**
     * Secrets file URI.
     */
    public readonly secretsFileHref!: pulumi.Output<string | undefined>;
    /**
     * Test data used when testing via the Azure Portal.
     */
    public readonly testData!: pulumi.Output<string | undefined>;
    /**
     * Test data URI.
     */
    public readonly testDataHref!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppFunction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppFunctionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["config"] = args ? args.config : undefined;
            resourceInputs["configHref"] = args ? args.configHref : undefined;
            resourceInputs["files"] = args ? args.files : undefined;
            resourceInputs["functionAppId"] = args ? args.functionAppId : undefined;
            resourceInputs["functionName"] = args ? args.functionName : undefined;
            resourceInputs["href"] = args ? args.href : undefined;
            resourceInputs["invokeUrlTemplate"] = args ? args.invokeUrlTemplate : undefined;
            resourceInputs["isDisabled"] = args ? args.isDisabled : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["language"] = args ? args.language : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scriptHref"] = args ? args.scriptHref : undefined;
            resourceInputs["scriptRootPathHref"] = args ? args.scriptRootPathHref : undefined;
            resourceInputs["secretsFileHref"] = args ? args.secretsFileHref : undefined;
            resourceInputs["testData"] = args ? args.testData : undefined;
            resourceInputs["testDataHref"] = args ? args.testDataHref : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["config"] = undefined /*out*/;
            resourceInputs["configHref"] = undefined /*out*/;
            resourceInputs["files"] = undefined /*out*/;
            resourceInputs["functionAppId"] = undefined /*out*/;
            resourceInputs["href"] = undefined /*out*/;
            resourceInputs["invokeUrlTemplate"] = undefined /*out*/;
            resourceInputs["isDisabled"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["language"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["scriptHref"] = undefined /*out*/;
            resourceInputs["scriptRootPathHref"] = undefined /*out*/;
            resourceInputs["secretsFileHref"] = undefined /*out*/;
            resourceInputs["testData"] = undefined /*out*/;
            resourceInputs["testDataHref"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppFunction" }, { type: "azure-native:web/v20160801:WebAppFunction" }, { type: "azure-native:web/v20180201:WebAppFunction" }, { type: "azure-native:web/v20181101:WebAppFunction" }, { type: "azure-native:web/v20190801:WebAppFunction" }, { type: "azure-native:web/v20200601:WebAppFunction" }, { type: "azure-native:web/v20200901:WebAppFunction" }, { type: "azure-native:web/v20201001:WebAppFunction" }, { type: "azure-native:web/v20201201:WebAppFunction" }, { type: "azure-native:web/v20210101:WebAppFunction" }, { type: "azure-native:web/v20210115:WebAppFunction" }, { type: "azure-native:web/v20210201:WebAppFunction" }, { type: "azure-native:web/v20210301:WebAppFunction" }, { type: "azure-native:web/v20220301:WebAppFunction" }, { type: "azure-native:web/v20230101:WebAppFunction" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppFunction.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppFunction resource.
 */
export interface WebAppFunctionArgs {
    /**
     * Config information.
     */
    config?: any;
    /**
     * Config URI.
     */
    configHref?: pulumi.Input<string>;
    /**
     * File list.
     */
    files?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Function App ID.
     */
    functionAppId?: pulumi.Input<string>;
    /**
     * Function name.
     */
    functionName?: pulumi.Input<string>;
    /**
     * Function URI.
     */
    href?: pulumi.Input<string>;
    /**
     * The invocation URL
     */
    invokeUrlTemplate?: pulumi.Input<string>;
    /**
     * Gets or sets a value indicating whether the function is disabled
     */
    isDisabled?: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * The function language
     */
    language?: pulumi.Input<string>;
    /**
     * Site name.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Script URI.
     */
    scriptHref?: pulumi.Input<string>;
    /**
     * Script root path URI.
     */
    scriptRootPathHref?: pulumi.Input<string>;
    /**
     * Secrets file URI.
     */
    secretsFileHref?: pulumi.Input<string>;
    /**
     * Test data used when testing via the Azure Portal.
     */
    testData?: pulumi.Input<string>;
    /**
     * Test data URI.
     */
    testDataHref?: pulumi.Input<string>;
}