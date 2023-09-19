import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An application type version resource for the specified application type name resource.
 */
export class ApplicationTypeVersion extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationTypeVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationTypeVersion {
        return new ApplicationTypeVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicefabric/v20210601:ApplicationTypeVersion';

    /**
     * Returns true if the given object is an instance of ApplicationTypeVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationTypeVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationTypeVersion.__pulumiType;
    }

    /**
     * The URL to the application package
     */
    public readonly appPackageUrl!: pulumi.Output<string>;
    /**
     * List of application type parameters that can be overridden when creating or updating the application.
     */
    public /*out*/ readonly defaultParameterList!: pulumi.Output<{[key: string]: string}>;
    /**
     * Azure resource etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Azure resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current deployment or provisioning state, which only appears in the response
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Azure resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ApplicationTypeVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationTypeVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.appPackageUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appPackageUrl'");
            }
            if ((!args || args.applicationTypeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationTypeName'");
            }
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["appPackageUrl"] = args ? args.appPackageUrl : undefined;
            resourceInputs["applicationTypeName"] = args ? args.applicationTypeName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["defaultParameterList"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["appPackageUrl"] = undefined /*out*/;
            resourceInputs["defaultParameterList"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabric/v20170701preview:ApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20190301:ApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20190301preview:ApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20190601preview:ApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20191101preview:ApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20200301:ApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20201201preview:ApplicationTypeVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApplicationTypeVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApplicationTypeVersion resource.
 */
export interface ApplicationTypeVersionArgs {
    /**
     * The URL to the application package
     */
    appPackageUrl: pulumi.Input<string>;
    /**
     * The name of the application type name resource.
     */
    applicationTypeName: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The application type version.
     */
    version?: pulumi.Input<string>;
}
