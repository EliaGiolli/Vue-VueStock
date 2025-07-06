<template>
    <footer class="bg-green-200 text-gray-900 py-8 px-4 mt-16">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <!-- Brand -->
        <div class="text-lg font-semibold text-gray-900">
          © {{ currentYear }} VueStack. All rights reserved.
        </div>
  
        <!-- Navigation Links -->
        <nav class="flex space-x-6 text-sm">
          <a href="#about" class="hover:text-white transition">About</a>
          <a href="#projects" class="hover:text-white transition">Projects</a>
          <a href="#contact" class="hover:text-white transition">Contact</a>
          <a
            href="https://www.linkedin.com/in/tuo-username"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-white transition"
          >LinkedIn</a>
        </nav>
      </div>
    </footer>
</template>
  
<script setup>
  const currentYear = new Date().getFullYear();
</script>