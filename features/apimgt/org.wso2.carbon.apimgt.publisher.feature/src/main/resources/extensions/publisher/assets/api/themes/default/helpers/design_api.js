/*
 *  Copyright (c) 2015, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */
var resources = function(page,meta){
    return {
        js:['create_api_design.js','jquery-ace.min.js','typeahead.bundle.js', 'bootstrap.js',
            'jquery.form.js','jquery.cookie.js','bootstrap-tagsinput.min.js','jquery.validate.min.js','js-yaml.min.js','bootstrap-dialog.min.js',
            'create_asset.js','bootstrap-editable.js' ,'bootstrap-multiselect.js', 'custom-validation.js',
            'jsonpath-0.8.0.js','handlebars.js','jquery.noty.packaged.min.js' ,'typeaheadjs.js'],
        code:['api_meta.hbs', 'design_api_meta.hbs'],
        css:['bootstrap/bootstrap-editable.css',
             'bootstrap/bootstrap-tagsinput.css','api_designer.css','bootstrap-dialog.min.css', 'bootstrap-multiselect.css']
    }
};