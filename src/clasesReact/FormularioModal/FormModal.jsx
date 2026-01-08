import React, { useEffect, useState } from "react";

export const UserFormModal = ({ show, onClose, onSave, initial }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");