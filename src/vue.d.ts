import 'vue';
import { Socket } from 'socket.io-client'

import Service from '@/modules/api-service'

declare module 'vue/types/vue' {

    interface Vue {

        $socket: Socket;

        $service: Service;

    }

};