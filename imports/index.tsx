function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#007cff] text-[18px] w-full">Standard</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#444] text-[32px] w-full">
        <span className="font-['Noto_Sans_Armenian:Bold',sans-serif] leading-[normal]">֏</span>
        <span className="leading-[normal]">9 000 / $25</span>
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[10px] relative size-full">
        <Frame7 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Пул Токенов</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">20 000 в месяц (по 5 000 каждые 7 дней)</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Приоритет в очереди</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Базовый</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Простые Эксперты</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Доступны</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Думающие + Pro</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Ограничено</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Мультиответ и Диалог</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">3 параллельных чата, контекст до 10 сообщений</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic p-[10px] relative size-full text-[16px]">
        <Frame1 />
        <Frame2 />
        <Frame3 />
        <Frame8 />
        <Frame9 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f0f6f9] flex-[1_0_0] min-w-px relative rounded-[16px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <Frame />
        <Frame6 />
        <div className="bg-[#007cff] h-[65px] relative rounded-[16px] shrink-0 w-full" data-name="button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[30px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Выбрать тариф</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[16px] text-center w-full">
          <p className="leading-[normal]">Полное описание</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#007cff] text-[18px] w-full">Plus</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#444] text-[32px] w-full">
        <span className="font-['Noto_Sans_Armenian:Bold',sans-serif] leading-[normal]">֏</span>
        <span className="leading-[normal]">8 000 / $50</span>
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[10px] relative size-full">
        <Frame10 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Пул Токенов</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">50 000 в месяц (по 12 500 каждые 7 дней)</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Приоритет в очереди</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Средний</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Простые Эксперты</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Доступны</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Думающие + Pro</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Доступны</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Мультиответ и Диалог</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">10 параллельных чатов, контекст до 20 сообщений</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic p-[10px] relative size-full text-[16px]">
        <Frame12 />
        <Frame13 />
        <Frame14 />
        <Frame15 />
        <Frame16 />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#f0f6f9] flex-[1_0_0] min-w-px relative rounded-[16px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <Frame4 />
        <Frame11 />
        <div className="bg-[#007cff] h-[65px] relative rounded-[16px] shrink-0 w-full" data-name="button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[30px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Выбрать тариф</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[16px] text-center w-full">
          <p className="leading-[normal]">Полное описание</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#007cff] text-[18px] w-full">Pro</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#444] text-[32px] w-full">
        <span className="font-['Noto_Sans_Armenian:Bold',sans-serif] leading-[normal]">֏</span>
        <span className="leading-[normal]">36 000 / $100</span>
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[10px] relative size-full">
        <Frame18 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Пул Токенов</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">120 000 в месяц (по 30 000 каждые 7 дней)</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Приоритет в очереди</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Высокий</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Простые Эксперты</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Доступны</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Думающие + Pro</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Доступны</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Мультиответ и Диалог</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">25 параллельных чатов, контекст до 30 сообщений</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic p-[10px] relative size-full text-[16px]">
        <Frame20 />
        <Frame21 />
        <Frame22 />
        <Frame23 />
        <Frame24 />
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[#f0f6f9] flex-[1_0_0] min-w-px relative rounded-[16px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <Frame17 />
        <Frame19 />
        <div className="bg-[#007cff] h-[65px] relative rounded-[16px] shrink-0 w-full" data-name="button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[30px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Выбрать тариф</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[16px] text-center w-full">
          <p className="leading-[normal]">Полное описание</p>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#007cff] text-[18px] w-full">Advanced</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#444] text-[32px] w-full">
        <span className="font-['Noto_Sans_Armenian:Bold',sans-serif] leading-[normal]">֏</span>
        <span className="leading-[normal]">73 000 / $200</span>
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[10px] relative size-full">
        <Frame26 />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Пул Токенов</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">260 000 в месяц (по 65 000 каждые 7 дней)</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Приоритет в очереди</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">VIP</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Простые Эксперты</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Доступны</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Думающие + Pro</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Доступны</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Мультиответ и Диалог</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">50 параллельных чатов, контекст до 50 сообщений</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic p-[10px] relative size-full text-[16px]">
        <Frame28 />
        <Frame29 />
        <Frame30 />
        <Frame31 />
        <Frame32 />
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#f0f6f9] flex-[1_0_0] min-w-px relative rounded-[16px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <Frame25 />
        <Frame27 />
        <div className="bg-[#007cff] h-[65px] relative rounded-[16px] shrink-0 w-full" data-name="button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[30px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Выбрать тариф</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[16px] text-center w-full">
          <p className="leading-[normal]">Полное описание</p>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#007cff] text-[18px] w-full">Advanced</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#444] text-[32px] w-full">
        <span className="font-['Noto_Sans_Armenian:Bold',sans-serif] leading-[normal]">֏</span>
        <span className="leading-[normal]">127 000 / $350</span>
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[10px] relative size-full">
        <Frame34 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Пул Токенов</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">500 000 в месяц (по 125 000 каждые 7 дней)</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Приоритет в очереди</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Максимальный</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Простые Эксперты</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Доступны</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Думающие + Pro</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Доступны</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Мультиответ и Диалог</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">100 параллельных чатов, контекст не ограничен</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic p-[10px] relative size-full text-[16px]">
        <Frame36 />
        <Frame37 />
        <Frame38 />
        <Frame39 />
        <Frame40 />
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#f0f6f9] flex-[1_0_0] min-w-px relative rounded-[16px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <Frame33 />
        <Frame35 />
        <div className="bg-[#007cff] h-[65px] relative rounded-[16px] shrink-0 w-full" data-name="button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[30px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Выбрать тариф</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[16px] text-center w-full">
          <p className="leading-[normal]">Полное описание</p>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#007cff] text-[18px] w-full">Ultimate</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#444] text-[32px] w-full">
        <span className="font-['Noto_Sans_Armenian:Bold',sans-serif] leading-[normal]">֏</span>
        <span className="leading-[normal]">182 000 / $500</span>
      </p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[10px] relative size-full">
        <Frame42 />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Пул Токенов</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">750 000 в месяц (по 187 500 каждые 7 дней)</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Приоритет в очереди</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Абсолютный</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Простые Эксперты</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Доступны</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Думающие + Pro</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Доступны</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6b6b] whitespace-nowrap">
        <p className="leading-[normal]">Мультиответ и Диалог</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#007cff] w-[min-content]">
        <p className="leading-[normal]">Без ограничений</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic p-[10px] relative size-full text-[16px]">
        <Frame44 />
        <Frame45 />
        <Frame46 />
        <Frame47 />
        <Frame48 />
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#f0f6f9] flex-[1_0_0] min-w-px relative rounded-[16px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <Frame41 />
        <Frame43 />
        <div className="bg-[#007cff] h-[65px] relative rounded-[16px] shrink-0 w-full" data-name="button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[30px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Выбрать тариф</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[16px] text-center w-full">
          <p className="leading-[normal]">Полное описание</p>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[2060px]">
      <Frame5 />
      <Frame51 />
      <Frame52 />
      <Frame54 />
      <Frame55 />
      <Frame53 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[12px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
          <circle cx="6" cy="6" fill="#007CFF" id="Ellipse 281" r="6" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[12px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
          <circle cx="6" cy="6" fill="#F0F6F9" id="Ellipse 282" r="6" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[12px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
          <circle cx="6" cy="6" fill="#F0F6F9" id="Ellipse 282" r="6" />
        </svg>
      </div>
    </div>
  );
}

export default function Frame50() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-start px-[88px] py-[64px] relative size-full">
      <p className="[word-break:break-word] font-['Onest:Medium',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[#333] text-[48px] w-[min-content]">Тарифы</p>
      <Frame49 />
      <Frame56 />
    </div>
  );
}