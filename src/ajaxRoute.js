import { route } from './core/RouteManager'

import * as dotenv from 'dotenv'

dotenv.config()
const prefix = process.env.AJAX_PREFIX ? process.env.AJAX_PREFIX : 'ajax'

route(`/${prefix}/login`, 'ajax.login')

route(`/${prefix}/items`, 'ajax.items')
route(`/${prefix}/items/datatable`, 'ajax.items.datatble')

route(`/${prefix}/menu-admin`, 'ajax.menu-admin')
