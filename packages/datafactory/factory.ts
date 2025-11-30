import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Factory resource type.
 *
 * Uses Azure REST API version 2018-06-01. In version 2.x of the Azure Native provider, it used API version 2018-06-01.
 */
export class Factory extends pulumi.CustomResource {
    /**
     * Get an existing Factory resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Factory {
        return new Factory(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datafactory:Factory';

    /**
     * Returns true if the given object is an instance of Factory.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Factory {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Factory.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    /**
     * Time the factory was created in ISO8601 format.
     */
    declare public /*out*/ readonly createTime: pulumi.Output<string>;
    /**
     * Etag identifies change in the resource.
     */
    declare public /*out*/ readonly eTag: pulumi.Output<string>;
    /**
     * Properties to enable Customer Managed Key for the factory.
     */
    declare public readonly encryption: pulumi.Output<types.outputs.EncryptionConfigurationResponse | undefined>;
    /**
     * List of parameters for factory.
     */
    declare public readonly globalParameters: pulumi.Output<{[key: string]: types.outputs.GlobalParameterSpecificationResponse} | undefined>;
    /**
     * Managed service identity of the factory.
     */
    declare public readonly identity: pulumi.Output<types.outputs.FactoryIdentityResponse | undefined>;
    /**
     * The resource location.
     */
    declare public readonly location: pulumi.Output<string | undefined>;
    /**
     * The resource name.
     */
    declare public /*out*/ readonly name: pulumi.Output<string>;
    /**
     * Factory provisioning state, example Succeeded.
     */
    declare public /*out*/ readonly provisioningState: pulumi.Output<string>;
    /**
     * Whether or not public network access is allowed for the data factory.
     */
    declare public readonly publicNetworkAccess: pulumi.Output<string | undefined>;
    /**
     * Purview information of the factory.
     */
    declare public readonly purviewConfiguration: pulumi.Output<types.outputs.PurviewConfigurationResponse | undefined>;
    /**
     * Git repo information of the factory.
     */
    declare public readonly repoConfiguration: pulumi.Output<types.outputs.FactoryGitHubConfigurationResponse | types.outputs.FactoryVSTSConfigurationResponse | undefined>;
    /**
     * The resource tags.
     */
    declare public readonly tags: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;
    /**
     * Version of the factory.
     */
    declare public /*out*/ readonly version: pulumi.Output<string>;

    /**
     * Create a Factory resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FactoryArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if (args?.resourceGroupName === undefined && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["encryption"] = args?.encryption;
            resourceInputs["factoryName"] = args?.factoryName;
            resourceInputs["globalParameters"] = args?.globalParameters;
            resourceInputs["identity"] = args?.identity;
            resourceInputs["location"] = args?.location;
            resourceInputs["publicNetworkAccess"] = args?.publicNetworkAccess;
            resourceInputs["purviewConfiguration"] = args?.purviewConfiguration;
            resourceInputs["repoConfiguration"] = args?.repoConfiguration;
            resourceInputs["resourceGroupName"] = args?.resourceGroupName;
            resourceInputs["tags"] = args?.tags;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["globalParameters"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["purviewConfiguration"] = undefined /*out*/;
            resourceInputs["repoConfiguration"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datafactory/v20170901preview:Factory" }, { type: "azure-native:datafactory/v20180601:Factory" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Factory.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Factory resource.
 */
export interface FactoryArgs {
    /**
     * Properties to enable Customer Managed Key for the factory.
     */
    encryption?: pulumi.Input<types.inputs.EncryptionConfigurationArgs>;
    /**
     * The factory name.
     */
    factoryName?: pulumi.Input<string>;
    /**
     * List of parameters for factory.
     */
    globalParameters?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.GlobalParameterSpecificationArgs>}>;
    /**
     * Managed service identity of the factory.
     */
    identity?: pulumi.Input<types.inputs.FactoryIdentityArgs>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Whether or not public network access is allowed for the data factory.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * Purview information of the factory.
     */
    purviewConfiguration?: pulumi.Input<types.inputs.PurviewConfigurationArgs>;
    /**
     * Git repo information of the factory.
     */
    repoConfiguration?: pulumi.Input<types.inputs.FactoryGitHubConfigurationArgs | types.inputs.FactoryVSTSConfigurationArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}