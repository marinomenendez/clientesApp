import { Injectable } from '@angular/core';
import { supabase } from '../config/supabase';
import { Client } from '../interfaces/client.interface';
import { Comunidad } from 'src/app/interfaces/comunidad.interface';

@Injectable({
  providedIn: 'root',
})
export class Clients {

  constructor() { }

  async getClients() {
    const {
      data,
      error
    } = await supabase
      .from('clients')
      //.select('*')
        .select(`
          id,
          name,
          email,
          phone
        `)
      .order('id');
    if (error) {
      throw error;
    }
    return data;
  }

  async getClient(id: number) {
    const {
      data,
      error
    } = await supabase
      .from('clients')
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      throw error;
    }
    return data;
  }

  async addClient(client: Client) {
    const {
      error
    } = await supabase
      .from('clients')
      .insert([client]);
    if (error) {
      throw error;
    }
  }

  async updateClient(id: number, client: Client) {
    const {
      error
    } = await supabase
      .from('clients')
      .update(client)
      .eq('id', id);
    if (error) {
      throw error;
    }
  }
  async deleteClient(id: number) {
    const {
      error
    } = await supabase
      .from('clients')
      .delete()
      .eq('id', id);
    if (error) {
      throw error;
    }
  }

  async getComunidadesAutonomas() {
    //const datos: Comunidad[]=[];
    const {
      data,
      error
    } = await supabase
      .from('comunidades')
      .select('*')
      .order('id_comunidad');
    if (error) {
      throw error;
    }
    console.log(data);
    //datos = JSON.stringify(data);
    //return JSON.stringify(data);
    return data;
  }

  async getProvincias() {
    const {
      data,
      error
    } = await supabase
      .from('provincias')
      .select('*')
      .order('id_provincia');
    if (error) {
      throw error;
    }
    return data;
  }


} //fin clase
