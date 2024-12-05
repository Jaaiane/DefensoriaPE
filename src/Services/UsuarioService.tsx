import AsyncStorage from "@react-native-async-storage/async-storage";
import { Usuario } from "../models/Usuario";

const USER_STORAGE_KEY = "@usuarios";

export class UsuarioService {
  static async getUsuarios(): Promise<Usuario[]> {
    const usuariosJson = await AsyncStorage.getItem(USER_STORAGE_KEY);
    return usuariosJson ? JSON.parse(usuariosJson) : [];
  }

  static async addUsuario(usuario: Usuario): Promise<void> {
    const usuarios = await this.getUsuarios();
    usuario.id = new Date().toISOString(); // Gera um ID único baseado na data.
    usuarios.push(usuario);
    await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(usuarios));
  }

  static async updateUsuario(updatedUsuario: Usuario): Promise<void> {
    const usuarios = await this.getUsuarios();
    const index = usuarios.findIndex((u) => u.id === updatedUsuario.id);
    if (index !== -1) {
      usuarios[index] = updatedUsuario;
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(usuarios));
    }
  }

  static async deleteUsuario(id: string): Promise<void> {
    const usuarios = await this.getUsuarios();
    const filteredUsuarios = usuarios.filter((u) => u.id !== id);
    await AsyncStorage.setItem(
      USER_STORAGE_KEY,
      JSON.stringify(filteredUsuarios)
    );
  }
}
