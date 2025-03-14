// Copyright 2023 Specter Ops, Inc.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import { EdgeCheckboxType } from '../../edgeTypes';
import { SearchResult } from '../../hooks/useSearch';
import { EntityKinds } from '../../utils/content';

const SEARCH_RESET = 'app/search/RESET';
const CYPHER_QUERY_EDITED = 'app/search/CYPHER_QUERY_EDITED';
const PATH_FILTERS_SAVED = 'app/search/PATH_FILTERS_SAVED';

export const TAB_CHANGED = 'app/search/TAB_CHANGED';

export const SOURCE_NODE_EDITED = 'app/search/SOURCE_NODE_EDITED';
export const SOURCE_NODE_SELECTED = 'app/search/SOURCE_NODE_SELECTED';

export const DESTINATION_NODE_EDITED = 'app/search/DESTINATION_NODE_EDITED';
export const DESTINATION_NODE_SELECTED = 'app/search/DESTINATION_NODE_SELECTED';

const PRIMARY_SEARCH = 'primary';
const PATHFINDING_SEARCH = 'secondary';
const CYPHER_SEARCH = 'cypher';
const TIER_ZERO_SEARCH = 'tierZero';

const SEARCH_ENDPOINT = '/search';

const SEARCH_TYPE_FUZZY = 'fuzzy';
const SEARCH_TYPE_EXACT = 'exact';

export {
    CYPHER_QUERY_EDITED,
    CYPHER_SEARCH,
    PATHFINDING_SEARCH,
    PATH_FILTERS_SAVED,
    PRIMARY_SEARCH,
    SEARCH_ENDPOINT,
    SEARCH_RESET,
    SEARCH_TYPE_EXACT,
    SEARCH_TYPE_FUZZY,
    TIER_ZERO_SEARCH,
};

//The search value usually aligns with the results from hitting the search endpoint but when
//we are pulling the data from a different page and filling out the value ourselves it might
//not conform to our expected type
export type SearchValue = SearchNodeType | SearchResult;

export interface SearchBarState {
    options: SearchResult[];
    searchTerm: string;
    loading: boolean;
    //value is set to optional to safeguard against possibly passing undefined when the value
    //is not derived from direct user interaction with the search input
    value?: SearchValue;
}

export interface SearchNodeType {
    objectid: string;
    type?: EntityKinds;
    name?: string;
}

export interface CypherSearchState {
    searchTerm: string;
}

export interface SearchState {
    primary: SearchBarState;
    secondary: SearchBarState;
    cypher: CypherSearchState;

    searchType: string;
    pathFilters: EdgeCheckboxType[];
    activeTab: SearchTargetType;
}

interface SearchResetAction {
    type: typeof SEARCH_RESET;
}

interface TabChangedAction {
    type: typeof TAB_CHANGED;
    tabName: SearchTargetType;
}

export interface PathFiltersSavedAction {
    type: typeof PATH_FILTERS_SAVED;
    filters: EdgeCheckboxType[];
}

export interface CypherSearchAction {
    type: typeof CYPHER_SEARCH;
    searchTerm?: string;
}

export interface CypherQueryEditedAction {
    type: typeof CYPHER_QUERY_EDITED;
    searchTerm: string;
}

export interface SourceNodeSelectedAction {
    type: typeof SOURCE_NODE_SELECTED;
    node?: SearchValue;
    doPathfindSearch: boolean;
}

export interface SourceNodeEditedAction {
    type: typeof SOURCE_NODE_EDITED;
    searchTerm: string;
}

export interface DestinationNodeSelectedAction {
    type: typeof DESTINATION_NODE_SELECTED;
    node?: SearchValue;
}

export interface DestinationNodeEditedAction {
    type: typeof DESTINATION_NODE_EDITED;
    searchTerm: string;
}

export enum EndPoints {
    search = '/api/search',
}

export type CypherActionTypes = CypherSearchAction | CypherQueryEditedAction;

export type NodeActionTypes =
    | SourceNodeSelectedAction
    | SourceNodeEditedAction
    | DestinationNodeSelectedAction
    | DestinationNodeEditedAction;

export type SearchbarActionTypes =
    | SearchResetAction
    | PathFiltersSavedAction
    | TabChangedAction
    | CypherActionTypes
    | NodeActionTypes;

export type SearchTargetType = typeof PRIMARY_SEARCH | typeof PATHFINDING_SEARCH;

export type TabNames = typeof PRIMARY_SEARCH | typeof PATHFINDING_SEARCH | typeof CYPHER_SEARCH;
