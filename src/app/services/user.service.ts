import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "../../environments/environment";
import { User } from "../models/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserService {
  supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async getUsers() {
    const { data: users } = await this.supabase.from<User>("users").select("*");
    return users;
  }

  async addUser(_user: User) {
    const { data: user } = await this.supabase
      .from<User>("users")
      .insert(_user)
      .single();
    return user;
  }
}
