import * as pulumi from "@pulumi/pulumi";
    /**
     * The binding to an Azure Machine Learning web service.
     */
    export interface AzureMachineLearningWebServiceFunctionBindingArgs {
        /**
         * The API key used to authenticate with Request-Response endpoint.
         */
        apiKey?: pulumi.Input<string>;
        /**
         * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
         */
        batchSize?: pulumi.Input<number>;
        /**
         * The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
         */
        endpoint?: pulumi.Input<string>;
        /**
         * The inputs for the Azure Machine Learning web service endpoint.
         */
        inputs?: pulumi.Input<AzureMachineLearningWebServiceInputsArgs>;
        /**
         * A list of outputs from the Azure Machine Learning web service endpoint execution.
         */
        outputs?: pulumi.Input<pulumi.Input<AzureMachineLearningWebServiceOutputColumnArgs>[]>;
        /**
         * Indicates the function binding type.
         * Expected value is 'Microsoft.MachineLearning/WebService'.
         */
        type: pulumi.Input<"Microsoft.MachineLearning/WebService">;
    }

    /**
     * Describes an input column for the Azure Machine Learning web service endpoint.
     */
    export interface AzureMachineLearningWebServiceInputColumnArgs {
        /**
         * The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
         */
        dataType?: pulumi.Input<string>;
        /**
         * The zero based index of the function parameter this input maps to.
         */
        mapTo?: pulumi.Input<number>;
        /**
         * The name of the input column.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The inputs for the Azure Machine Learning web service endpoint.
     */
    export interface AzureMachineLearningWebServiceInputsArgs {
        /**
         * A list of input columns for the Azure Machine Learning web service endpoint.
         */
        columnNames?: pulumi.Input<pulumi.Input<AzureMachineLearningWebServiceInputColumnArgs>[]>;
        /**
         * The name of the input. This is the name provided while authoring the endpoint.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Describes an output column for the Azure Machine Learning web service endpoint.
     */
    export interface AzureMachineLearningWebServiceOutputColumnArgs {
        /**
         * The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
         */
        dataType?: pulumi.Input<string>;
        /**
         * The name of the output column.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Describes one input parameter of a function.
     */
    export interface FunctionInputArgs {
        /**
         * The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
         */
        dataType?: pulumi.Input<string>;
        /**
         * A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false.
         */
        isConfigurationParameter?: pulumi.Input<boolean>;
    }

    /**
     * Describes the output of a function.
     */
    export interface FunctionOutputArgs {
        /**
         * The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
         */
        dataType?: pulumi.Input<string>;
    }

    /**
     * The binding to a JavaScript function.
     */
    export interface JavaScriptFunctionBindingArgs {
        /**
         * The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'
         */
        script?: pulumi.Input<string>;
        /**
         * Indicates the function binding type.
         * Expected value is 'Microsoft.StreamAnalytics/JavascriptUdf'.
         */
        type: pulumi.Input<"Microsoft.StreamAnalytics/JavascriptUdf">;
    }

    /**
     * The properties that are associated with a scalar function.
     */
    export interface ScalarFunctionPropertiesArgs {
        /**
         * The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
         */
        binding?: pulumi.Input<AzureMachineLearningWebServiceFunctionBindingArgs | JavaScriptFunctionBindingArgs>;
        /**
         * A list of inputs describing the parameters of the function.
         */
        inputs?: pulumi.Input<pulumi.Input<FunctionInputArgs>[]>;
        /**
         * The output of the function.
         */
        output?: pulumi.Input<FunctionOutputArgs>;
        /**
         * Indicates the type of function.
         * Expected value is 'Scalar'.
         */
        type: pulumi.Input<"Scalar">;
    }
