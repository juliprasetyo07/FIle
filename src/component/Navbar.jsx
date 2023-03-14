export default function Navbar() {
  return (
    <section class=" relative bg-black h-screen w-1/5 pl-5 border-blue border-r-2">
      <div class=" pt-3">
        <p class="font-bold ">Local Disk</p>

        <ul class="ml-5 font-medium">
          <li>System (C:)</li>
          <li>Data (D:)</li>
          <li>
            <div class="grid ml-5 font-light">
              <a href="">>Design</a>
              <a href="">>Document</a>
              <a href="">>games</a>
              <a href="">>Resources</a>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <p class="font-bold">Removable Stroage</p>

        <ul class="ml-5 font-medium">
          <li>WINDOWS RECOVERY (F:)</li>
          <li>MOVIES (G:)</li>
        </ul>
      </div>

      <div>
        <p class="font-bold">Remote Stroage</p>

        <ul class="ml-5 font-medium">
          <li>Adobe Creative Cloud Files</li>
          <li>Google Drive</li>
          <li>One Drive</li>
        </ul>
      </div>

      <div class="absolute bottom-0 left-0 w-full h-11 bg-white shadow-2xl"></div>
    </section>
  );
}
