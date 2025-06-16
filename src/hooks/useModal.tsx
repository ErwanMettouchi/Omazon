import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return { isModalOpen, setIsModalOpen };
}
