// Copyright 2024 Specter Ops, Inc.
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

import { Typography } from '@mui/material';
import { FC } from 'react';

const General: FC = () => {
    return (
        <>
            <Typography variant='body2'>The Entra user is synchronized to the on-prem AD user.</Typography>
            <Typography variant='body2'>
                The Entra user may be able to authenticate as the on-prem AD user with its own password if password
                write-back is enabled. The Entra user may already have the same password as the on-prem user if password
                hash synchronization is enabled.
            </Typography>
        </>
    );
};

export default General;
