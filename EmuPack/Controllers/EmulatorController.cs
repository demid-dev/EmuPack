using EmuPack.Models.Machine;
using EmuPack.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmuPack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmulatorController : ControllerBase
    {
        private readonly ILogger<EmulatorController> _logger;
        private readonly EmulatedMachine _emulatedMachine;

        public EmulatorController(ILogger<EmulatorController> logger,
            EmulatedMachine emulatedMachine)
        {
            _logger = logger;
            _emulatedMachine = emulatedMachine;
        }

        [HttpGet]
        public MachineState GetMachineState()
        {
            return _emulatedMachine.MachineState;
        }
    }
}
